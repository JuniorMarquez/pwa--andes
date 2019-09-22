import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TixDetailComponent } from './tix-detail.component';

describe('TixDetailComponent', () => {
  let component: TixDetailComponent;
  let fixture: ComponentFixture<TixDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TixDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TixDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
