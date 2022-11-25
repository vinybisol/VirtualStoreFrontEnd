export class ProductModel {
  constructor(
    public id: string,
    public name: string,
    public shortName: string,
    public price: number,
    public priceMarket: number,
    public description: string,
    public note: string,
    public inCart: boolean,
    public image1?: any,
    public image2?: File | null,
    public image3?: File | null,
    public image4?: File | null,
    public image5?: File | null
  ) {}
  public imageTest: File | undefined;
}
