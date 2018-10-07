import { MatSnackBar } from "@angular/material";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../product.model";

@Component({
  selector: "vm-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input()
  public product: Product;

  @Output()
  Produto: EventEmitter<Product> = new EventEmitter();

  constructor(private snack: MatSnackBar) {}

  ngOnInit() {}

  productClick() {
    if (this.product.quantity == 0) {
      return this.snack.open("Item fora do estoque", "", { duration: 1500 });
    }
    this.product.quantity--;
    this.Produto.emit(this.product);
  }
}
