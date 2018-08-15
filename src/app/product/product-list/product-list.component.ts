import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../shared/product.model';
import {ProductService} from '../product.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];
  categorySlug: string;
  constructor(private productsList: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.categorySlug = params['slug'];
        if(this.categorySlug) {
          this.products = this.productsList.getProductsByCat(this.categorySlug);
        }else{
          this.products = this.productsList.getProducts();
        }
      }
    );
  }

}
