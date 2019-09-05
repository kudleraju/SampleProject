import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHeadingComponent } from './demo-heading.component';

describe('DemoHeadingComponent', () => {
  let component: DemoHeadingComponent;
  let fixture: ComponentFixture<DemoHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
