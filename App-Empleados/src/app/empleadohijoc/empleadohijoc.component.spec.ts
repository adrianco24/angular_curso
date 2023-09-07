import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadohijocComponent } from './empleadohijoc.component';

describe('EmpleadohijocComponent', () => {
  let component: EmpleadohijocComponent;
  let fixture: ComponentFixture<EmpleadohijocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadohijocComponent]
    });
    fixture = TestBed.createComponent(EmpleadohijocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
