export class ProductModel {
  constructor(
    public _id: string | undefined,
    public name: string,
    public shortName: string,
    public price: number,
    public priceMarket: number,
    public description: string,
    public note: string,
    public inCart: boolean,
    public image?: FileList
  ) {}
}
