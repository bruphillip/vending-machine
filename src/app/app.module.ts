import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    VendingMachineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
