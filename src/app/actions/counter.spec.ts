import { getAllProducts, getAllProductsSuccess } from './counter'

describe('Counter', () => {
  it('should create an instance', () => {
    expect(getAllProducts).toBeTruthy()
    expect(getAllProductsSuccess).toBeTruthy()
  })
})
