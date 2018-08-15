import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HomeService} from './home.service';
import {AboutService} from '../about/about.service';
import {ProductService} from '../product/product.service';
import {CategoryModel} from '../shared/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topSection: {imgSrc: string, text: {headline: string, introText: string}};
  aboutHome: {title: string, subtitle: string, text: string};
  productsCategory: CategoryModel[];
  testimonials: {author: string, text: string}[];

  constructor(private home: HomeService,
              private about: AboutService,
              private productsList: ProductService) { }

  ngOnInit() {
    this.topSection = this.home.topContent;
    this.aboutHome = this.about.homeAbout;
    this.productsCategory = this.productsList.categories;
    this.testimonials = this.about.testimonials;
  }

}
