import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Currency, Real } from './../current.model';

@Component({
  selector: 'vm-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {

  Real: Currency[] = Real;
  saldoValue: number = 0.00;

  @Output()
  buyIt: EventEmitter<number> = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  currencyClick(currency: Currency){
    this.saldoValue += currency.value;
  }

  buy(){
    this.buyIt.emit(this.saldoValue);
  }
  
}
