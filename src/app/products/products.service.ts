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

  getSingleProduct(id:string){
    const ind = this.products.findIndex(function(p){
      return(p.id == id)
    })
    return this.products[ind];
  }

}
