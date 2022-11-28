import { ProductModel } from './product-model';

describe('ProductModel', () => {
  it('should create an instance', () => {
    expect(
      new ProductModel(
        undefined,
        'full name',
        'test name',
        12,
        20,
        '',
        '',
        false
      )
    ).toBeTruthy();
  });
});
