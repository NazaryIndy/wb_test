import { Component, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Good } from '../models/good.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnDestroy {

  public search: string;
  public goods: Good[];
  private defaultGoods: Good[];
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private goodsService: DataService) {
    this.getGoods();
  }

  public ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getGoods(): void {
    this.goodsService.getData().subscribe(goods => this.goods = this.defaultGoods = goods);
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
