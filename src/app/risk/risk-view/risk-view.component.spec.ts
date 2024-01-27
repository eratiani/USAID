import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskViewComponent } from './risk-view.component';

describe('RiskViewComponent', () => {
  let component: RiskViewComponent;
  let fixture: ComponentFixture<RiskViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
