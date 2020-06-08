import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Good } from '../models/good.interface';
import { DataService } from '../data.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent {

  public search: string;
  public goods: Observable<Good[]>;

  constructor(private goodsService: DataService) {
    this.goods = this.goodsService.getData();
  }

}
