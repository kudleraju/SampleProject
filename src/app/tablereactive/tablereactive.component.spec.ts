import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablereactiveComponent } from './tablereactive.component';

describe('TablereactiveComponent', () => {
  let component: TablereactiveComponent;
  let fixture: ComponentFixture<TablereactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablereactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablereactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
