import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreklistComponent } from './treklist.component';

describe('TreklistComponent', () => {
  let component: TreklistComponent;
  let fixture: ComponentFixture<TreklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
