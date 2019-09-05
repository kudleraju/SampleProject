import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotaskComponent } from './demotask.component';

describe('DemotaskComponent', () => {
  let component: DemotaskComponent;
  let fixture: ComponentFixture<DemotaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemotaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemotaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
