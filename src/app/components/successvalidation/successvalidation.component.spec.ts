import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessvalidationComponent } from './successvalidation.component';

describe('SuccessvalidationComponent', () => {
  let component: SuccessvalidationComponent;
  let fixture: ComponentFixture<SuccessvalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessvalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
