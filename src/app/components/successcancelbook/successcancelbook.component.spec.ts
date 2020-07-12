import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesscancelbookComponent } from './successcancelbook.component';

describe('SuccesscancelbookComponent', () => {
  let component: SuccesscancelbookComponent;
  let fixture: ComponentFixture<SuccesscancelbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesscancelbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesscancelbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
