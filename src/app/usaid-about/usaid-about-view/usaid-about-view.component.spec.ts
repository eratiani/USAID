import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaidAboutViewComponent } from './usaid-about-view.component';

describe('UsaidAboutViewComponent', () => {
  let component: UsaidAboutViewComponent;
  let fixture: ComponentFixture<UsaidAboutViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsaidAboutViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsaidAboutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
