import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Good } from '@models';
import { GOODS_URL } from './shared/constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<Good[]> {
    return this.http.get<Good[]>(GOODS_URL);
  }

}
