import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';

import { CoreComponent } from './core.component';
import { GoodsComponent } from '../goods/goods.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CoreComponent,
    GoodsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: []
})
export class CoreModule { }
