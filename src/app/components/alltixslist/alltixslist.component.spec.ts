import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltixslistComponent } from './alltixslist.component';

describe('AlltixslistComponent', () => {
  let component: AlltixslistComponent;
  let fixture: ComponentFixture<AlltixslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltixslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltixslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
