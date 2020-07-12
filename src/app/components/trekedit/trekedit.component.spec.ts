import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekeditComponent } from './trekedit.component';

describe('TrekeditComponent', () => {
  let component: TrekeditComponent;
  let fixture: ComponentFixture<TrekeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
