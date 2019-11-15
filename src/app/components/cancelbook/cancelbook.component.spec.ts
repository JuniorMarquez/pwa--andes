import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelbookComponent } from './cancelbook.component';

describe('CancelbookComponent', () => {
  let component: CancelbookComponent;
  let fixture: ComponentFixture<CancelbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
