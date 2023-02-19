export class ProductModel {
  public id: string | undefined = undefined;
  public name: string = '';
  public shortName: string = '';
  public price: number = 0;
  public priceMarket: number = 0;
  public note: string = '';
  public inCart: boolean = false;
  public image: File[] = [];
  public images?: Image[] = undefined;
  public photoString: string[] = [];
  constructor() {}
}
interface Image {
  key: string;
  image: string;
}
