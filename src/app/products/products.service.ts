import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-product';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = PRODUCTS;

  constructor() { }


  getProducts(){
    return [...this.products];
  }

}
