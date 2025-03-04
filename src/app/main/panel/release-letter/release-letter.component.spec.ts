import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseLetterComponent } from './release-letter.component';

describe('ReleaseLetterComponent', () => {
  let component: ReleaseLetterComponent;
  let fixture: ComponentFixture<ReleaseLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseLetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
