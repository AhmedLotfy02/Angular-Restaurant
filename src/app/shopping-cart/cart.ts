import { Product } from "../products/product";

/* export interface Cart{
  cartData: [{id:string, product:Product, prodQuantity:number }];
  cartTotal: number;
} */

export interface Cart{
  id:string;
  prodId:string;
  prodTitle:string;
  prodQuantity:number;
  prodPrice: number;
}
