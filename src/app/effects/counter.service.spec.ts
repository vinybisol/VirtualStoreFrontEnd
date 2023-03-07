import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Action } from '@ngrx/store'
import { Observable } from 'rxjs'

import { ProductService } from '../pages/product/product.service'
import { CounterEffectService } from './counter.effect.service'

describe('CounterService', () => {
  let service: CounterEffectService
  let actions$: Observable<Action>
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CounterEffectService, ProductService, provideMockActions(() => actions$)],
    })
    service = TestBed.inject(CounterEffectService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
