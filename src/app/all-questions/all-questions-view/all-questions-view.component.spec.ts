import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuestionsViewComponent } from './all-questions-view.component';

describe('AllQuestionsViewComponent', () => {
  let component: AllQuestionsViewComponent;
  let fixture: ComponentFixture<AllQuestionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllQuestionsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllQuestionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
