import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbcItViewComponent } from './tbc-it-view.component';

describe('TbcItViewComponent', () => {
  let component: TbcItViewComponent;
  let fixture: ComponentFixture<TbcItViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbcItViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TbcItViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
