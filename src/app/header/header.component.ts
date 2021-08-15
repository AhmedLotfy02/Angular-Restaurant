import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Favorite } from '../favorite/favorite';
import { FavoritesService } from '../favorite/favorites.service';
import { Product } from '../products/product';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  favorites: Favorite[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoritesService.viewProd().subscribe((product:any)=>{
      this.addToFav(product);
    })
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


  addToFav(product: Product){
    let prodExists = false;
    for(let index in this.favorites){
      if(this.favorites[index].prodId === product.id){
        prodExists = true;
        break;
      }
    }

    if(!prodExists){
      this.favorites.push({
        id:"",
        prodId:product.id,
        prodTitle:product.title,
        prodImg:product.cover,
        prodPrice:product.price
      });

    }else{
        this.favorites.filter(function(v,ind,arr){
          if(v.prodTitle === product.title){
            console.log(v);
            return;
          }else{
            return v.prodTitle !== product.title;
          };
        });
        console.log(this.favorites);

    }
  }

  deleteFromFav(product: Product){

  }

}
