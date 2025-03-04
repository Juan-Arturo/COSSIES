import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspensionCancellationComponent } from './suspension-cancellation.component';

describe('SuspensionCancellationComponent', () => {
  let component: SuspensionCancellationComponent;
  let fixture: ComponentFixture<SuspensionCancellationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuspensionCancellationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspensionCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
