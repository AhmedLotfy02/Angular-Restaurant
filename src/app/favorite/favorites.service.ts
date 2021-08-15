import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private product: Product[] = []

  constructor() { }

  subject = new Subject();

  receiveProd(product: Product){
    this.subject.next(product)
  }

  viewProd(){
    return this.subject.asObservable();
  }

}
