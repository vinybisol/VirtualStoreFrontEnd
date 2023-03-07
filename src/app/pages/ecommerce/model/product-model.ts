export class ProductModel {
  public id: string | undefined = undefined
  public name = ''
  public shortName = ''
  public price = 0
  public priceMarket = 0
  public note = ''
  public inCart = false
  public image: File[] = []
  public images: string[] = []
  public photoString: string[] = []
  public photosIds: string[] = []
}
