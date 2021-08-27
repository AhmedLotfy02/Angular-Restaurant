import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../products/mock-product';
import { Product } from '../products/product';
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
  res!: string;
  searchProducts: Product[] = [];
  products: Product[] = PRODUCTS;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.search) {
        this.res = params.search;
        var proTemp = this.products;
        this.searchProducts = this.products.filter((food) =>
          food.title.includes(this.res)
        );
        this.products = proTemp;
      }
    });

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
