import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialServiceProjectComponent } from './social-service-project.component';

describe('SocialServiceProjectComponent', () => {
  let component: SocialServiceProjectComponent;
  let fixture: ComponentFixture<SocialServiceProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialServiceProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialServiceProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
