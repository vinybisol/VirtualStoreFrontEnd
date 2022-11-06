import { ProductModel } from './product-model';

describe('ProductModel', () => {
  it('should create an instance', () => {
    expect(
      new ProductModel(0, 'full name', 'test name', 12, 5, '')
    ).toBeTruthy();
  });
});
