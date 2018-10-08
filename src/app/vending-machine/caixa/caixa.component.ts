import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Currency, clientCoin } from "../currency.model";

@Component({
  selector: "vm-caixa",
  templateUrl: "./caixa.component.html",
  styleUrls: ["./caixa.component.css"]
})
export class CaixaComponent implements OnInit {
  Real: Currency[] = clientCoin;
  saldoValue: number = 0.0;

  @Output()
  buyIt: EventEmitter<Object> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  currencyClick(currency: Currency) {
    currency.quantity++;
    this.saldoValue += currency.value;
  }

  buy() {
    this.buyIt.emit({ price: this.saldoValue, currency: this.Real });
  }
}
