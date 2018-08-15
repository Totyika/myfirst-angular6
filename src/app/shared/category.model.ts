export class CategoryModel {
  public categoryTitle: string;
  public categorySlug: string;
  public categoryImg: string;

  constructor(categoryTitle: string, categorySlug: string, categoryImg: string) {
    this.categoryTitle = categoryTitle;
    this.categorySlug = categorySlug;
    this.categoryImg = categoryImg;
  }
}
