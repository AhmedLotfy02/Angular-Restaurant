import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/products/mock-product';
import { Product } from 'src/app/products/product';
import { CartsService } from 'src/app/shopping-cart/carts.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
})
export class CategoryDetailsComponent implements OnInit {
  products: Product[] = PRODUCTS;
  closeResult = '';

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
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.cartsService.addToCart(product);
    console.log('This is added by user', this.cartsService.getProducts());
  }

  toggleFavorite(icon:any){
    if( (icon instanceof HTMLElement) ){
      icon.style.display = "none";
      console.log(icon)
    }else{
      icon.color = "red";
      console.log(icon)
    }

  }


}
