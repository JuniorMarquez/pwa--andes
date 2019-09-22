import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtixsComponent } from './addtixs.component';

describe('AddtixsComponent', () => {
  let component: AddtixsComponent;
  let fixture: ComponentFixture<AddtixsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtixsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtixsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
