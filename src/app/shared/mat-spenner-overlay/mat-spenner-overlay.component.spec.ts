import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSpennerOverlayComponent } from './mat-spenner-overlay.component';

describe('MatSpennerOverlayComponent', () => {
  let component: MatSpennerOverlayComponent;
  let fixture: ComponentFixture<MatSpennerOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSpennerOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSpennerOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
