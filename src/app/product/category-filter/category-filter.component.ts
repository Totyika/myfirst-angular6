import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../shared/product.model';
import {ProductService} from '../product.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {
  products: ProductModel[];
  categorySlug: string;
  constructor(private productsList: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.categorySlug = params['slug'];
      }
    );

    this.products = this.productsList.getProductsByCat(this.categorySlug);

  }

}
