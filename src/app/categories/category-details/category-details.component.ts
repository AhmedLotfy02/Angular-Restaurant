import { Component, OnInit } from '@angular/core';
import {
  crepeProd,
  PRODUCTS,
  waffelProd,
  tsunamiProd,
  lokaymatProd,
  pancakeProd,
  mo3gnatProd,
  eidProd,
} from 'src/app/products/mock-product';
import { Product } from 'src/app/products/product';
import { CartsService } from 'src/app/shopping-cart/carts.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatIcon } from '@angular/material/icon';
import { FavoritesService } from 'src/app/favorite/favorites.service';
import { ProductsService } from 'src/app/products/products.service';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from 'src/app/filter-dialog/filter-dialog.component';

export interface DialogData {
  category: string;
  minPrice: number;
  maxPrice: number;
}

@Component({
  selector: 'category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
})
export class CategoryDetailsComponent implements OnInit {
  //category:any;
  categoryId: any = this.route.snapshot.paramMap
    .get('categoryId')
    ?.split('=')[1];
  products: Product[] = PRODUCTS;
  closeResult = '';
  counter = 0;
  CartBoolean = true;
  FavoriteToggle = false;

  category!: string;
  minPrice!: number;
  maxPrice!: number;
  openDialog() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '280px',
      data: {
        category: this.category,
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
      },
    });
    const newProds: Product[] = [];
    dialogRef.afterClosed().subscribe((result) => {
      this.category = result.category;
      this.minPrice = result.minPrice;
      this.maxPrice = result.maxPrice;
      this.products =
        this.category == 'crepe'
          ? crepeProd
          : this.category == 'waffel'
          ? waffelProd
          : PRODUCTS;
      for (let i = 0; i < this.products.length; i++) {
        if (this.minPrice === this.products[i].price) {
          //I want to add these products to the product array . Do we use mapping?
          console.log(this.products[i]);
        }
      }
    });
  }

  toggleFav(icon: HTMLElement) {
    //this.FavoriteToggle = !this.FavoriteToggle;

    if (icon.innerHTML == 'favorite_border') {
      icon.innerHTML = 'favorite';
    } else {
      icon.innerHTML = 'favorite_border';
    }
  }

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
    private productsService: ProductsService,
    private categoryService: CategoryService,
    private cartsService: CartsService,
    private favoritesService: FavoritesService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    //this.category = this.categoryService.getCategoryDetails(this.categoryId);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.categoryId === 'crepe') {
        this.products = crepeProd;
      } else if (params.categoryId === 'waffel') {
        this.products = waffelProd;
      } else if (params.categoryId === 'tusnami') {
        this.products = tsunamiProd;
      } else if (params.categoryId === 'lokaymat') {
        this.products = lokaymatProd;
      } else if (params.categoryId === 'pancake') {
        this.products = pancakeProd;
      } else if (params.categoryId === 'mo3gnat') {
        this.products = mo3gnatProd;
      } else if (params.categoryId === 'eid') {
        this.products = eidProd;
      }
    });
  }

  handleAddToCart(product: Product, count: string) {
    if (count == '' || count == '+') {
      product.counterCart++;
    }
    if (count === '-') {
      if (product.counterCart === 1) {
        product.counterCart = 0;
        this.CartBoolean = true;
      } else {
        product.counterCart--;
      }
    }

    this.cartsService.receiveProd(product, count);
  }

  addToFav(product: Product) {
    this.favoritesService.receiveProd(product);
  }
}
