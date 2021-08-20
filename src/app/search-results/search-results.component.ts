import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  constructor(
    private ProdService: ProductsService,
    private route: ActivatedRoute
  ) {}
  res!: String;
  ngOnInit(): void {
    // // this.cartsService.viewProd().subscribe((result:any)=>{
    // //   this.ProdService.viewSearching().subscribe((result: any) => {
    // //     this.res = result;
    // //     console.log(this.res);
    // //   });
    // // }
    // const data: any = this.route.snapshot.paramMap;
    // // const book: any = {
    // //   Title: data.get('Title'),
    // //   Author: data.get('Author'),
    // //   Cover: data.get('Cover'),
    // //   Price: data.get('Price')
    // // };
    // // console.log(book);
    // // this.book = book;
    // this.res = data.get();
    // console.log(data);
  }
}
