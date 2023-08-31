import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgformioComponent } from './ngformio.component';

describe('NgformioComponent', () => {
  let component: NgformioComponent;
  let fixture: ComponentFixture<NgformioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgformioComponent]
    });
    fixture = TestBed.createComponent(NgformioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
