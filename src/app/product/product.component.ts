import { Component, OnInit } from '@angular/core';
import {ProductService} from './product.service';
import {CategoryModel} from '../shared/category.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prodBg: string;
  categories: CategoryModel[];

  constructor(private product: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.prodBg = this.product.pageBg;
    this.categories = this.product.categories;
  }

}
