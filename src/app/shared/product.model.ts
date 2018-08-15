export class ProductModel {
  public categoryProducts: {
    id: number,
    name: string,
    slug: string,
    thumb: string,
    image: string,
    sku: string,
    description: string,
    price: number,
    promoPrice: number,
    stock: string,
    category: string,
    categorySlug: string
  };

  constructor(categoryProducts: {id: number, name: string, slug: string, thumb: string, image: string, sku: string, description: string, price: number, promoPrice: number, stock: string, category: string, categorySlug: string}) {
    this.categoryProducts = categoryProducts;
  }
}
