import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltixsComponent } from './alltixs.component';

describe('AlltixsComponent', () => {
  let component: AlltixsComponent;
  let fixture: ComponentFixture<AlltixsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltixsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltixsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
