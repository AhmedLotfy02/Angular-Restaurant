import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/products/mock-product';
import { Product } from 'src/app/products/product';
import { CartsService } from 'src/app/shopping-cart/carts.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
})
export class CategoryDetailsComponent implements OnInit {
  products: Product[] = PRODUCTS;
  constructor(
    private cartsService: CartsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.cartsService.addToCart(product);
    console.log('This is added by user', this.cartsService.getProducts());
  }

}
