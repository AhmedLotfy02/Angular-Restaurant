import { Component, OnInit, Output } from '@angular/core';
import { Cart } from '../cart';
import { CartsService } from '../carts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CARTS } from '../mock-cart';
import { Product } from 'src/app/products/product';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class CartComponent implements OnInit {
  carts: Cart[] = [];
  cartTotal = 0;

  constructor(
    private cartsService: CartsService,
    private _formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}
  closeResult = '';

  sideState = false;
  toggleSide() {
    this.sideState = !this.sideState;
  }
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

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
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl1: ['', Validators.required],
      firstCtrl2: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl1: ['', Validators.required],
      secondCtrl2: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });


    this.cartsService.viewProd().subscribe((product: any)=>{
      this.addToCart(product);
    });

  }

  addToCart(product:Product){
    let prodExists = false;

    for(let index in this.carts){
      if( this.carts[index].prodId === product.id ){
        this.carts[index].prodQuantity++;
        prodExists = true;
        break;
      }
    }

    if(!prodExists){
      this.carts.push({
        id:"",
        prodId:product.id,
        prodTitle:product.title,
        prodImg:product.cover,
        prodPrice:product.price,
        prodQuantity:1,
      });
    }

    this.cartTotal = 0;
    this.carts.forEach(p=>{
      this.cartTotal += p.prodQuantity * p.prodPrice;
    });
  }

}
