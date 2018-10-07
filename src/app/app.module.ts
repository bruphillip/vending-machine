import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, LOCALE_ID } from "@angular/core";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { MatSnackBarModule } from "@angular/material";
import { MatTableModule } from "@angular/material/table";
registerLocaleData(localePt);

import { AppComponent } from "./app.component";
import { VendingMachineComponent } from "./vending-machine/vending-machine.component";
import { ItemComponent } from "./vending-machine/item/item.component";
import { CaixaComponent } from "./vending-machine/caixa/caixa.component";
import { CartItemComponent } from "./vending-machine/cart-item/cart-item.component";

@NgModule({
  declarations: [
    AppComponent,
    VendingMachineComponent,
    ItemComponent,
    CaixaComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
