import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductItemComponent } from './product/product-list/product-item/product-item.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeService} from './home/home.service';
import {AboutService} from './about/about.service';
import {ProductService} from './product/product.service';
import {ContactService} from './contact/contact.service';
import { CategoryFilterComponent } from './product/category-filter/category-filter.component';
import { ProductPageComponent } from './product/product-page/product-page.component';
import {StockDirective} from './shared/stock.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ProductListComponent,
    ProductItemComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    CategoryFilterComponent,
    ProductPageComponent,
    StockDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HomeService, AboutService, ProductService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
