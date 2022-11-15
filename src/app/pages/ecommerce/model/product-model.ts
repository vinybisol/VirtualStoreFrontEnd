export class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public shortName: string,
    public price: number,
    public priceMarket: number,
    public description: string,
    public note: string,
    public inCart: boolean,
    public image1: [],
    public image2: [],
    public image3: [],
    public image4: [],
    public image5: []
  ) {}
  public imageTest: string | ArrayBuffer | null = '';
}
