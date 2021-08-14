import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
}
