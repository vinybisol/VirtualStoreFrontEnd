import { TestBed } from '@angular/core/testing';

import { CounterEffectService } from './counter.effect.service';

describe('CounterService', () => {
  let service: CounterEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
