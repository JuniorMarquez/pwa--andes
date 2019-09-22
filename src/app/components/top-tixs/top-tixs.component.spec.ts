import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTixsComponent } from './top-tixs.component';

describe('TopTixsComponent', () => {
  let component: TopTixsComponent;
  let fixture: ComponentFixture<TopTixsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTixsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTixsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
