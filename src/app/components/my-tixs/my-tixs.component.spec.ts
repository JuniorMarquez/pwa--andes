import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTixsComponent } from './my-tixs.component';

describe('MyTixsComponent', () => {
  let component: MyTixsComponent;
  let fixture: ComponentFixture<MyTixsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTixsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTixsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
