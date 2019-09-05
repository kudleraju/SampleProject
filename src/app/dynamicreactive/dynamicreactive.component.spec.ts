import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicreactiveComponent } from './dynamicreactive.component';

describe('DynamicreactiveComponent', () => {
  let component: DynamicreactiveComponent;
  let fixture: ComponentFixture<DynamicreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
