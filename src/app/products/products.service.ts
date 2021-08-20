import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { PRODUCTS } from './mock-product';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = PRODUCTS;
  SearchSubject = new Subject();
  constructor(private router: Router) {}

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(id: string) {
    const ind = this.products.findIndex(function (p) {
      return p.id == id;
    });
    return this.products[ind];
  }
  // getSearching(wanted: String) {
  //   console.log(wanted);
  //   this.SearchSubject.next(wanted);
  //   return this.viewSearching();
  // }

  // viewSearching() {
  //   return this.SearchSubject.asObservable();
  // }
}
