import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GheaderComponent } from './gheader.component';

describe('GheaderComponent', () => {
  let component: GheaderComponent;
  let fixture: ComponentFixture<GheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
