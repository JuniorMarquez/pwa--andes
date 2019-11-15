import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletevalidationComponent } from './deletevalidation.component';

describe('DeletevalidationComponent', () => {
  let component: DeletevalidationComponent;
  let fixture: ComponentFixture<DeletevalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletevalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
