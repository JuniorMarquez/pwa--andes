import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssbookComponent } from './assbook.component';

describe('AssbookComponent', () => {
  let component: AssbookComponent;
  let fixture: ComponentFixture<AssbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
