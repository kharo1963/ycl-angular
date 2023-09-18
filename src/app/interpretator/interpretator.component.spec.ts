import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretatorComponent } from './interpretator.component';

describe('InterpretatorComponent', () => {
  let component: InterpretatorComponent;
  let fixture: ComponentFixture<InterpretatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterpretatorComponent]
    });
    fixture = TestBed.createComponent(InterpretatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
