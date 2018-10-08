import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, LOCALE_ID } from "@angular/core";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { MatSnackBarModule, MatDialogModule } from "@angular/material";
import { MatTableModule } from "@angular/material/table";
registerLocaleData(localePt);

import { AppComponent } from "./app.component";
import { VendingMachineComponent } from "./vending-machine/vending-machine.component";
import { ItemComponent } from "./vending-machine/item/item.component";
import { CaixaComponent } from "./vending-machine/caixa/caixa.component";
import { CartItemComponent } from "./vending-machine/cart-item/cart-item.component";
import { CoinView } from "./vending-machine/coin-view";

@NgModule({
  declarations: [
    AppComponent,
    VendingMachineComponent,
    ItemComponent,
    CaixaComponent,
    CartItemComponent,
    CoinView
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt" }],
  bootstrap: [AppComponent],
  entryComponents: [CoinView]
})
export class AppModule {}
