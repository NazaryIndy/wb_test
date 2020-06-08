import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GoodsComponent } from '../goods/goods.component';
import { GoodsRoutingModule } from './goods-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GoodsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    GoodsRoutingModule
  ],
  providers: []
})
export class GoodsModule { }
