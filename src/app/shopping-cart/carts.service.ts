import { Injectable } from '@angular/core';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  private products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  subject = new Subject;
  subscriptions: Subscription[] = [];

  receiveProd(product:Product, count:string){
    this.subject.next(count);
    this.subject.next(product);
  }

  viewProd(){
    return this.subject.asObservable();
  }


  getProducts() {
    return this.products;
  }

}
