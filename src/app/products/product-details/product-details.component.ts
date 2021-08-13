import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-product';
import { Product } from '../product';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products: Product[] = PRODUCTS; //7alian bs
  constructor() { }

  ngOnInit(): void {
  }



}
