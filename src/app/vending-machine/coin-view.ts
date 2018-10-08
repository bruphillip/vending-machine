import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  templateUrl: "./coin-view.html",
  selector: "vm-coin"
})
export class CoinView {
  constructor(
    public dialogRef: MatDialogRef<CoinView>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}
}
