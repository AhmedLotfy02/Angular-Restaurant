import { Injectable } from '@angular/core';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';
import { Cart } from './cart';
import { CARTS } from './mock-cart';

@Injectable({
  providedIn: 'root'
})

export class CartsService {

  //private carts: Cart[] = [];
  private products: Product[] = [];
  private price = 0;
  constructor(private productsService: ProductsService) { }

  getProducts(){
    return this.products;
  }

  addToCart(product: Product){
    this.products.push(product);
    this.price += product.price;
    console.log(this.price);
  }
  getTotalPrice(){
    console.log(this.price);
    return this.price;

  }
}
