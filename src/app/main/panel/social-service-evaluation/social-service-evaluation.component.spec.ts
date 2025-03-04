import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialServiceEvaluationComponent } from './social-service-evaluation.component';

describe('SocialServiceEvaluationComponent', () => {
  let component: SocialServiceEvaluationComponent;
  let fixture: ComponentFixture<SocialServiceEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialServiceEvaluationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialServiceEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
