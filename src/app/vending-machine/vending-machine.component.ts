import { CoinView } from "./coin-view";
import { Real, Currency, clientCoin } from "./currency.model";
import { coinChange } from "./coin-change.func";
import { MatSnackBar, MatDialog } from "@angular/material";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Product, Produtos } from "./product.model";
import { CaixaComponent } from "./caixa/caixa.component";
import { CartItemComponent } from "./cart-item/cart-item.component";
import { ItemComponent } from "./item/item.component";

@Component({
  selector: "vending-machine",
  templateUrl: "./vending-machine.component.html",
  styleUrls: ["./vending-machine.component.css"]
})
export class VendingMachineComponent implements OnInit {
  @ViewChild(CaixaComponent)
  caixaComp: CaixaComponent;

  @ViewChild(CartItemComponent)
  lista: CartItemComponent;

  @ViewChild(ItemComponent)
  item: ItemComponent;

  Produtos: Product[] = Produtos;
  Message: string = "";
  Troco: number[] = [];
  caixa: Currency[] = Real;

  CartProduct: Product[] = [];
  price: number = 0.0;

  constructor(private snack: MatSnackBar, private dialog: MatDialog) {}

  ngOnInit() {}

  addToCart(produto: Product) {
    // Adicionar ao carrinho do cliente
    this.price += produto.valor;
    const index = this.CartProduct.findIndex(
      product => product.id === produto.id
    );
    if (index !== -1) {
      return this.CartProduct[index].quantity++;
    }
    this.CartProduct.push({ ...produto, quantity: 1 });
  }

  calculateBuy({ price, currency }) {
    this.Troco = [];
    if (price == 0) {
      return this.snack.open(
        "Insira algum valor, antes de realizar a compra",
        "",
        {
          duration: 3000
        }
      );
    }

    if (price < this.price) {
      return this.snack.open("Saldo insuficiente", "", { duration: 2000 });
    }

    price -= this.price; //this.price é o valor que vem do carrinho
    this.calculoTroco(price, currency);

    this.snack.open(
      `O seu troco em moedas foi de: R$: ${price.toFixed(
        2
      )} \n  as moedas foram ${this.Troco.map(t => {
        return `R$: ${t.toFixed(2)}`;
      })} `,
      "Fechar",
      {
        duration: 20000
      }
    );
    this.resetMachine();
  }

  resetMachine() {
    this.caixaComp.saldoValue = 0;
    this.price = 0;
    this.CartProduct = [];
    this.lista.produtos = [];
    this.caixaComp.Real = clientCoin.map(i => {
      i.quantity = 0;
      return i;
    });
  }

  calculoTroco(price, currency) {
    this.caixa.map((e, index) => {
      try {
        if (e.value == currency[index].value)
          return (e.quantity += currency[index].quantity);
      } catch (err) {}
    });

    try {
      this.Troco = coinChange(price, this.caixa);
    } catch (err) {
      this.snack.open(`O seu troco em moedas foi de: 0`, "Fechar", {
        duration: 20000
      });
    }
  }

  openCoinList() {
    this.dialog.open(CoinView, {
      data: this.caixa
    });
  }
}
