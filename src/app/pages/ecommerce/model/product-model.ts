export class ProductModel {
  public key: string | undefined = undefined;
  public name: string = '';
  public shortName: string = '';
  public price: number = 0;
  public priceMarket: number = 0;
  public note: string = '';
  public inCart: boolean = false;
  public image?: FileList;
  public images?: Image[];
  constructor() {}
}
interface Image {
  key: string;
  image: string;
}
