import { Component, OnInit } from '@angular/core';
import { Product, Produtos } from './product.model'

@Component({
  selector: 'vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.css']
})
export class VendingMachineComponent implements OnInit {

  Produtos: Product[] = Produtos;
  Message: string = ''
  Troco: number = 0

  CartProduct: Product[] = []
  price: number = 0.00

  constructor() { }

  ngOnInit() {
  }

  addToCart(produto: Product){
    this.price += produto.valor;
    this.CartProduct.push(produto);
  }

  calculateBuy(price: number){
    
    if(price == 0){ return null;}
    
    if(price < this.price){
      this.Message = 'Saldo Insuficiente'
    }else{
      this.Troco = price - this.price 
      this.Message = '';
    }
  }
}
