import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationReactive } from './validation-reactive';

describe('ValidationReactive', () => {
  let component: ValidationReactive;
  let fixture: ComponentFixture<ValidationReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationReactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationReactive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
