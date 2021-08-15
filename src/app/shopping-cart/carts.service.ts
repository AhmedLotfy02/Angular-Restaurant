import { Injectable } from '@angular/core';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  private products: Product[] = [];
  constructor(private productsService: ProductsService) {}


 subject = new Subject;

  receiveProd(product:Product){
    this.subject.next(product) //triggering an event
  }

  viewProd(){
    return this.subject.asObservable();
  }


  getProducts() {
    return this.products;
  }

}
