import { counterReducer, initialState } from './counter.reducer'

describe('CounterReducer', () => {
  it('should create an instance', () => {
    expect(initialState).toBeTruthy()
    expect(counterReducer).toBeTruthy()
  })
})
