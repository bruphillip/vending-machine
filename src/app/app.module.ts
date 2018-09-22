import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common' 

registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';
import { ItemComponent } from './vending-machine/item/item.component';
import { CaixaComponent } from './vending-machine/caixa/caixa.component';

@NgModule({
  declarations: [
    AppComponent,
    VendingMachineComponent,
    ItemComponent,
    CaixaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
