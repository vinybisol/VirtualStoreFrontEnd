export class ProductModel {
  constructor(
    public position: number,
    public name: string,
    public fullName: string,
    public price: number,
    public marketPrice: number,
    public quant: number,
    public description: string,
    public obs: string
  ) {}
}
