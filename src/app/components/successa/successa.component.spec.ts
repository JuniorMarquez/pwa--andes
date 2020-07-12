import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessaComponent } from './successa.component';

describe('SuccessaComponent', () => {
  let component: SuccessaComponent;
  let fixture: ComponentFixture<SuccessaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
