import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFooterComponent } from './panel-footer.component';

describe('PanelFooterComponent', () => {
  let component: PanelFooterComponent;
  let fixture: ComponentFixture<PanelFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
