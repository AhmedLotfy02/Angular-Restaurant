import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'categoryDetails/:categoryTitle', component: CategoryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
