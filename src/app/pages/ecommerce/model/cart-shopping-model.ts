import { ProductModel } from './product-model'

export class CartShoppingModel {
  protected total = 0
  protected productModel: ProductModel[] = []

  public addProductInCart(productModel: ProductModel): void {
    this.productModel.push(productModel)
    this.sumTotal()
  }
  public getTotal(): number {
    return this.total
  }
  public qtItens(): number {
    return this.productModel.length
  }
  public getLastAddProduct(): string {
    const index = this.productModel.length - 1
    return this.productModel[index].shortName
  }
  clearCartShooping(): void {
    this.productModel = []
    this.total = 0
  }
  private sumTotal(): void {
    this.total = 0
    this.productModel.map((product) => {
      this.total += product.price
    })
  }
}
