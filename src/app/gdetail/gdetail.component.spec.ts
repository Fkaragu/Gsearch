import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdetailComponent } from './gdetail.component';

describe('GdetailComponent', () => {
  let component: GdetailComponent;
  let fixture: ComponentFixture<GdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
