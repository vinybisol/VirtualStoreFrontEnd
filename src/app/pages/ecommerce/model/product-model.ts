export class ProductModel {
  constructor(
    public key: string | undefined,
    public name: string,
    public shortName: string,
    public price: number,
    public priceMarket: number,
    public note: string,
    public inCart: boolean,
    public image?: FileList,
    public images?: Image[]
  ) {}
}
interface Image {
  key: string;
  image: string;
}
