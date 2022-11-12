import { ProductModel } from './product-model';

export class CartShoppingModel {
  protected total: number = 0;
  protected qtItens: number = 0;
  protected productModel: ProductModel[] = [];

  public addProductInCart(productModel: ProductModel): void {
    this.productModel.push(productModel);
    this.sumTotal();
  }
  public getTotal(): number {
    return this.total;
  }
  clearCartShooping(): void {
    this.productModel = [];
    this.total = 0;
  }
  private sumTotal(): void {
    this.total = 0;
    this.productModel.map((product) => {
      this.total += product.price;
    });
  }
}
