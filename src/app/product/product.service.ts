import {ProductModel} from '../shared/product.model';
import {CategoryModel} from '../shared/category.model';

export class ProductService {
  pageBg = 'product.jpg';

  categories: CategoryModel[] = [
    new CategoryModel(
      'Category 1',
      'category-1',
      'cat1.jpg'
    ),
    new CategoryModel(
      'Category 2',
      'category-2',
      'cat2.jpg'
    ),
    new CategoryModel(
      'Category 3',
      'category-3',
      'cat3.jpg'
    ),
    new CategoryModel(
      'Category 4',
      'category-4',
      'cat4.jpg'
    ),
  ];

  private products: ProductModel[] = [
    new ProductModel(
      {
        'id': 0,
        'name': 'Product name 1',
        'slug': 'product-name-1',
        'thumb': 'assets/img/prod1.jpg',
        'image': 'assets/img/bigprod1.jpg',
        'sku': 'RGHUYT2452435',
        'description': 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii \'60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.',
        'price': 50,
        'promoPrice': 30,
        'stock': 'In stock',
        'category': 'Category 1',
        'categorySlug': 'category-1'
      }
    ),
    new ProductModel(
      {
        'id': 1,
        'name': 'Product name 2',
        'slug': 'product-name-2',
        'thumb': 'assets/img/prod2.jpg',
        'image': 'assets/img/bigprod1.jpg',
        'sku': 'RGHUYT2452435',
        'description': 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii \'60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.',
        'price': 150,
        'promoPrice': 150,
        'stock': 'Stock epuizat',
        'category': 'Category 1',
        'categorySlug': 'category-1'
      }
    ),
    new ProductModel(
      {
        'id': 2,
        'name': 'Product name 3',
        'slug': 'product-name-3',
        'thumb': 'assets/img/prod1.jpg',
        'image': 'assets/img/bigprod1.jpg',
        'sku': 'RGHUYT2452435',
        'description': 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii \'60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.',
        'price': 550,
        'promoPrice': 550,
        'stock': 'In stock',
        'category': 'Category 2',
        'categorySlug': 'category-2'
      }
    ),
    new ProductModel(
      {
        'id': 3,
        'name': 'Product name 4',
        'slug': 'product-name-4',
        'thumb': 'assets/img/prod2.jpg',
        'image': 'assets/img/bigprod1.jpg',
        'sku': 'RGHUYT2452435',
        'description': 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii \'60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.',
        'price': 50,
        'promoPrice': 30,
        'stock': 'La comanda',
        'category': 'Category 2',
        'categorySlug': 'category-2'
      }
    ),
    new ProductModel(
      {
        'id': 4,
        'name': 'Product name 5',
        'slug': 'product-name-5',
        'thumb': 'assets/img/prod3.jpg',
        'image': 'assets/img/bigprod1.jpg',
        'sku': 'RGHUYT2452435',
        'description': 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii \'60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.',
        'price': 500,
        'promoPrice': 500,
        'stock': 'In stock',
        'category': 'Category 4',
        'categorySlug': 'category-4'
      }
    ),
    new ProductModel(
      {
        'id': 5,
        'name': 'Product name 6',
        'slug': 'product-name-6',
        'thumb': 'assets/img/prod2.jpg',
        'image': 'assets/img/bigprod1.jpg',
        'sku': 'RGHUYT2452435',
        'description': 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii \'60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.',
        'price': 50,
        'promoPrice': 14,
        'stock': 'In stock',
        'category': 'Category 3',
        'categorySlug': 'category-3'
      }
    ),
    new ProductModel(
      {
        'id': 6,
        'name': 'Product name 7',
        'slug': 'product-name-7',
        'thumb': 'assets/img/prod1.jpg',
        'image': 'assets/img/bigprod1.jpg',
        'sku': 'RGHUYT2452435',
        'description': 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii \'60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.',
        'price': 350,
        'promoPrice': 350,
        'stock': 'Stock epuizat',
        'category': 'Category 4',
        'categorySlug': 'category-4'
      }
    ),
    new ProductModel(
      {
        'id': 7,
        'name': 'Product name 8',
        'slug': 'product-name-8',
        'thumb': 'assets/img/prod3.jpg',
        'image': 'assets/img/bigprod1.jpg',
        'sku': 'RGHUYT2452435',
        'description': 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii \'60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.',
        'price': 50,
        'promoPrice': 50,
        'stock': 'La comanda',
        'category': 'Category 2',
        'categorySlug': 'category-2'
      }
    ),
    new ProductModel(
      {
        'id': 8,
        'name': 'Product name 9',
        'slug': 'product-name-9',
        'thumb': 'assets/img/prod2.jpg',
        'image': 'assets/img/bigprod1.jpg',
        'sku': 'RGHUYT2452435',
        'description': 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii \'60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.',
        'price': 1350,
        'promoPrice': 1000,
        'stock': 'In stock',
        'category': 'Category 3',
        'categorySlug': 'category-3'
      }
    ),
    new ProductModel(
      {
        'id': 9,
        'name': 'Product name 10',
        'slug': 'product-name-10',
        'thumb': 'assets/img/prod1.jpg',
        'image': 'assets/img/bigprod1.jpg',
        'sku': 'RGHUYT2452435',
        'description': 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o',
        'price': 50,
        'promoPrice': 50,
        'stock': 'In stock',
        'category': 'Category 1',
        'categorySlug': 'category-1'
      }
    ),
  ];

  getProducts() {
    return this.products.slice();
  }

  getProductsByCat(category: string) {
    const filteredProducts = this.products.filter(myObj => myObj.categoryProducts.categorySlug === category);
    return filteredProducts;
  }

  getProductBySlug(slug: string) {
    const singleProduct= this.products.filter(myObj => myObj.categoryProducts.slug === slug);
    return singleProduct;
  }
}
