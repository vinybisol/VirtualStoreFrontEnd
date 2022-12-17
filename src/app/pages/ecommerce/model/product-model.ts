export class ProductModel {
  public key: string | undefined = undefined;
  public name: string = '';
  public shortName: string = '';
  public price: number = 0;
  public priceMarket: number = 0;
  public note: string = '';
  public inCart: boolean = false;
  public images?: File[] = [];
  public images1?: Image[] = undefined;
  constructor() {}
}
interface Image {
  key: string;
  image: string;
}
