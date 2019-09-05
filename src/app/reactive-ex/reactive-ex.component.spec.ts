import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveExComponent } from './reactive-ex.component';

describe('ReactiveExComponent', () => {
  let component: ReactiveExComponent;
  let fixture: ComponentFixture<ReactiveExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
