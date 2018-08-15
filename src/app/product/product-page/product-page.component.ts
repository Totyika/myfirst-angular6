import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../product.service';
import {ProductModel} from '../../shared/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  prodSlug: string;
  singleProduct: ProductModel[];
  featuredProducts: ProductModel[];

  constructor(private route: ActivatedRoute,
              private product: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.prodSlug = params['prodSlug'];
        this.singleProduct = this.product.getProductBySlug(this.prodSlug);

        const curProductID = this.singleProduct[0].categoryProducts.id;
        const featuredProductArray = this.product.getProductsByCat(this.singleProduct[0].categoryProducts.categorySlug);

        this.featuredProducts = featuredProductArray.filter(item => item.categoryProducts
          .id !== curProductID);
      }
    )
  }

}
