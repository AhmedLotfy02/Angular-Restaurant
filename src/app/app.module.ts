import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { CartDetailsComponent } from './shopping-cart/cart-details/cart-details.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RightSideComponent } from './right-side/right-side.component';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { SearchResultsComponent } from './search-results/search-results.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CategoryDetailsComponent,
    CartComponent,

    CartDetailsComponent,
    ProductDetailsComponent,
    RightSideComponent,
    FilterDialogComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatStepperModule,
    ReactiveFormsModule,
    NgbModule,
    MatDialogModule,
    MatSliderModule,
    MatRadioModule,
  ],
  providers: [CategoryDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
