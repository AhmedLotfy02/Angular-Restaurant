import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product';
import { Cart } from '../cart';


@Component({
  selector: 'cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  carts: Cart[] = [];
  @Input() prodItem:any;

  constructor() { }

  ngOnInit(): void {

  }

}
