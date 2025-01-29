import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationAcceptanceComponent } from './presentation-acceptance.component';

describe('PresentationAcceptanceComponent', () => {
  let component: PresentationAcceptanceComponent;
  let fixture: ComponentFixture<PresentationAcceptanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationAcceptanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
