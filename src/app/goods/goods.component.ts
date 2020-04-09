import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Good } from '../models/good.interface';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent {

  public search: string;
  public goods: Good[];
  private defaultGoods: Good[];

  constructor(private goodsService: DataService) {
    this.getGoods();
  }

  private getGoods(): void {
    this.goodsService.getData().subscribe(goods => this.goods = this.defaultGoods = goods);
  }

  public getGoodPrice(good: Good): string {
    return good.canBuy ? `Цена: ${good.price}` : `Не продается`;
  }

  public filterGoods(filterString: string): void {

    if (!filterString) {
      this.goods = this.defaultGoods;
      return;
    }
    this.goods = this.goods.filter(good => {
      return good.name.toLocaleLowerCase().includes(filterString.toLocaleLowerCase());
    });
  }

}
