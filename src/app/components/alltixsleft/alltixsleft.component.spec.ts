import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltixsleftComponent } from './alltixsleft.component';

describe('AlltixsleftComponent', () => {
  let component: AlltixsleftComponent;
  let fixture: ComponentFixture<AlltixsleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltixsleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltixsleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
