import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/products/mock-product';
import { Product } from 'src/app/products/product';
import { CartsService } from 'src/app/shopping-cart/carts.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatIcon } from '@angular/material/icon';
import { FavoritesService } from 'src/app/favorite/favorites.service';

@Component({
  selector: 'category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
})
export class CategoryDetailsComponent implements OnInit {
  products: Product[] = PRODUCTS;
  closeResult = '';
  counter = 0;
  CartBoolean = true;
  FavoriteToggle = false;
  toggleFav(icon:HTMLElement) {
    //this.FavoriteToggle = !this.FavoriteToggle;

    if(icon.innerHTML == "favorite_border"){
      icon.innerHTML = "favorite"
    }else{
      icon.innerHTML = "favorite_border"
    }
  }
  /* inc_Counter() {
    this.counter++;
  } */
  /* dec_counter() {
    if (this.counter === 1) {
      this.counter--;
      this.CartBoolean = true;
    } else {
      this.counter--;
    }
  } */
  counterFunc() {
    if (!this.counter) {
      this.CartBoolean = false;
      /* this.counter = 1; */
    }
  }
  open(content: any) {
    this.modalService.open(content, { size: 'xl' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  constructor(
    private cartsService: CartsService,
    private favoritesService: FavoritesService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  /* addToCart(product: Product, element: HTMLElement) {
    const cartProdImg = document.createElement('img');
    cartProdImg.src = 'assets/images/' + product.cover;
    cartProdImg.className = 'cartProdImg';
    cartProdImg.draggable = false;
    cartProdImg.width = 50;
    cartProdImg.style.animation = 'mymove 5s infinite';
    cartProdImg.style.animationTimingFunction = 'ease-in-out';

    element.appendChild(cartProdImg);
    console.log('This is added by user', this.cartsService.getProducts());
  } */

  handleAddToCart(product: Product, count:string){
    if(count=='' || count=='+'){
      this.counter++;
    }else{
      if(this.counter != 0){
        this.counter--;
      }

    }
    this.cartsService.receiveProd(product, count);
  }

  addToFav(product: Product){
    this.favoritesService.receiveProd(product);
  }

}
