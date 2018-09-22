import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'vm-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  private product: Product;

  @Output()
  Produto: EventEmitter<Product>

  constructor() {
    this.Produto = new EventEmitter();
   }

  ngOnInit() {
  }

  productClick(){
    this.Produto.emit(this.product)
  }
}
