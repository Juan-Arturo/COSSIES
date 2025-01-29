import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialServiceActivitiesComponent } from './social-service-activities.component';

describe('SocialServiceActivitiesComponent', () => {
  let component: SocialServiceActivitiesComponent;
  let fixture: ComponentFixture<SocialServiceActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialServiceActivitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialServiceActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
