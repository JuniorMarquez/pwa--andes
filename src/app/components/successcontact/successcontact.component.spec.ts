import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesscontactComponent } from './successcontact.component';

describe('SuccesscontactComponent', () => {
  let component: SuccesscontactComponent;
  let fixture: ComponentFixture<SuccesscontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesscontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesscontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
