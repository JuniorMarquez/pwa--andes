import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValistComponent } from './valist.component';

describe('ValistComponent', () => {
  let component: ValistComponent;
  let fixture: ComponentFixture<ValistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
