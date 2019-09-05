import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivefomsComponent } from './reactivefoms.component';

describe('ReactivefomsComponent', () => {
  let component: ReactivefomsComponent;
  let fixture: ComponentFixture<ReactivefomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivefomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivefomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
