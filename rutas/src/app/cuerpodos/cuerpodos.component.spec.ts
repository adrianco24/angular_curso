import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpodosComponent } from './cuerpodos.component';

describe('CuerpodosComponent', () => {
  let component: CuerpodosComponent;
  let fixture: ComponentFixture<CuerpodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuerpodosComponent]
    });
    fixture = TestBed.createComponent(CuerpodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
