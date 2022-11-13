import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceHeaderComponent } from './ecommerce-header.component';

describe('EcommerceHeaderComponent', () => {
  let component: EcommerceHeaderComponent;
  let fixture: ComponentFixture<EcommerceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
