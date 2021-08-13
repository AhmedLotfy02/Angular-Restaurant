import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartsService } from '../carts.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  /* cart = [{
    prodName:"Crepe",
    prodPrice:3.5,
    prodCount:3
  }] */
  //carts: Cart[] = [];

  constructor(private cartsService: CartsService) {}

  carts = this.cartsService.getProducts();
  totalPrice = this.cartsService.getTotalPrice();
  sideState = false;
  toggleSide() {
    this.sideState = !this.sideState;
  }
  ngOnInit(): void {}
}
