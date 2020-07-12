import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessdeletevalidationComponent } from './successdeletevalidation.component';

describe('SuccessdeletevalidationComponent', () => {
  let component: SuccessdeletevalidationComponent;
  let fixture: ComponentFixture<SuccessdeletevalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessdeletevalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessdeletevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
