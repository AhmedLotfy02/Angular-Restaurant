import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Favorite } from '../favorite/favorite';
import { FavoritesService } from '../favorite/favorites.service';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import { Product } from '../products/product';

export interface DialogData {
  category: string;
  minPrice: number;
  maxPrice: number;
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  favorites: Favorite[] = [];

  constructor(
    private favoritesService: FavoritesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.favoritesService.viewProd().subscribe((product: any) => {
      this.addToFav(product);
    });
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

  category!: string;
  minPrice!: number;
  maxPrice!: number;
  openDialog() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '240px',
      data: {
        category: this.category,
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.category = result.category;
      this.minPrice = result.minPrice;
      this.maxPrice = result.maxPrice;
    });
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

  deleteFromFav(product: Product) {}
}
