import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { BrandComponent } from './products/brand/brand.component';
import { CategoryComponent } from './products/category/category.component';
import { ReviewDetailsComponent } from './reviews/review-details/review-details.component';
import { AuthorComponent } from './reviews/author/author.component';
import { AllReviewsComponent } from './reviews/all-reviews/all-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReviewsComponent,
    ProductDetailsComponent,
    BrandComponent,
    CategoryComponent,
    ReviewDetailsComponent,
    AuthorComponent,
    AllReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
