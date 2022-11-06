import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceCardComponent } from './ecommerce-card.component';

describe('EcommerceCardComponent', () => {
  let component: EcommerceCardComponent;
  let fixture: ComponentFixture<EcommerceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
