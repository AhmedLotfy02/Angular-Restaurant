import { Injectable } from '@angular/core';
import { Menu } from '../menu';
import { MENUS } from '../mock-menu';
import { PRODUCTS } from '../products/mock-product';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Menu[] = MENUS;

  constructor(private productsService: ProductsService) { }

  getCategories(){
    return this.categories;
  }

  getCategoryDetails(id: string){
    const index = this.categories.findIndex((cat)=>{
      return (cat.id == id)
    })
    return this.categories[index];
  }

}
