import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { CategoryDetailsComponent } from '../categories/category-details/category-details.component';
import { Favorite } from '../favorite/favorite';
import { FavoritesService } from '../favorite/favorites.service';
//import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  favorites: Favorite[] = [];
  SearchField: String = '';
  constructor(
    private favoritesService: FavoritesService,
    //public dialog: MatDialog,
    private ProService: ProductsService,
    private router: Router,
    private cat: CategoryDetailsComponent
  ) {}

  ngOnInit(): void {
    this.favoritesService.viewProd().subscribe((product: any) => {
      this.addToFav(product);
    });
  }

  openD() {
    this.cat.openDialog();
  }
  onSearch(search: HTMLElement) {
    //bs mesh h3mlha keda . h3mlha zi fel button sheet
    search.style.display = 'flex';
  }
  sideState = false;
  favheart = true;
  whatsappicon = true;
  toggleSide() {
    this.sideState = !this.sideState;
    this.favheart = !this.favheart;
    this.whatsappicon = !this.whatsappicon;
  }
  searchBar = false;
  toggleSearchBar() {
    this.searchBar = !this.searchBar;
  }

  addToFav(product: Product) {
    let prodExists = false;
    for (let index in this.favorites) {
      if (this.favorites[index].prodId === product.id) {
        prodExists = true;
        break;
      }
    }

    if (!prodExists) {
      this.favorites.push({
        id: '',
        prodId: product.id,
        prodTitle: product.title,
        prodImg: product.cover,
        prodPrice: product.price,
      });
    } else {
      for (var i = 0; i < this.favorites.length; i++) {
        if (this.favorites[i].prodTitle === product.title) {
          this.favorites.splice(i, 1);
        }
      }
    }
    console.log(this.favorites);
  }

  deleteFromFav(product: Favorite) {
    for (var k = 0; k < this.favorites.length; k++) {
      if (product.prodTitle === this.favorites[k].prodTitle) {
        this.favorites.splice(k, 1);
      }
    }
  }
  deleteAll() {
    this.favorites.splice(0, this.favorites.length);
  }
  Searching() {
    // this.router.navigate(['results']);
    this.router.navigateByUrl('/results/' + this.SearchField);
  }

  // Searching() {
  //   this.ProService.getSearching(this.SearchField).subscribe(
  //     (repsonseData: any) => {
  //       console.log(repsonseData);
  //       this.router.navigate(['/results', { ...repsonseData }]);
  //       // this.SearchField = repsonseData.book;
  //       // console.log(this.book);
  //       // this.router.navigate(['/searchresult', { ...this.book }]);
  //     }
  //   );
  // }

  goHome() {
    this.router.navigate(['/']);
  }
}
