import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceShopComponent } from './ecommerce-shop.component';

describe('EcommerceShopComponent', () => {
  let component: EcommerceShopComponent;
  let fixture: ComponentFixture<EcommerceShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
