import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdetailchildComponent } from './gdetailchild.component';

describe('GdetailchildComponent', () => {
  let component: GdetailchildComponent;
  let fixture: ComponentFixture<GdetailchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdetailchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdetailchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
