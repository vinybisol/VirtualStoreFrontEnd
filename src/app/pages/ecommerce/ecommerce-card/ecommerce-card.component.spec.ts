import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { EcommerceCardComponent } from './ecommerce-card.component';

describe('EcommerceCardComponent', () => {
  let component: EcommerceCardComponent;
  let fixture: ComponentFixture<EcommerceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcommerceCardComponent],
      imports: [HttpClientTestingModule, MatDialogModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EcommerceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
