import { Component, OnChanges, Input, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "vm-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"]
})
export class CartItemComponent implements OnInit {
  dataSource: MatTableDataSource<Product>;
  _product: Product[];

  constructor() {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {}

  get produtos() {
    return this._product;
  }

  set produtos(produto: Product[]) {
    this._product = produto;
    this.dataSource = new MatTableDataSource(produto);
  }
}
