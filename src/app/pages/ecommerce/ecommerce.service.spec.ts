import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'

import { EcommerceService } from './ecommerce.service'

describe('EcommerceServiceService', () => {
  let service: EcommerceService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EcommerceService],
    })
    TestBed.inject(HttpTestingController)
    service = TestBed.inject(EcommerceService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
