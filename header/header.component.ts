import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onSearch(search: HTMLElement){ //bs mesh h3mlha keda . h3mlha zi fel button sheet
    search.style.display = "flex";
  }

}
