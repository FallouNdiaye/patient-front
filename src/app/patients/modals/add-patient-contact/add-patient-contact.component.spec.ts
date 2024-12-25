import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientContactComponent } from './add-patient-contact.component';

describe('AddPatientContactComponent', () => {
  let component: AddPatientContactComponent;
  let fixture: ComponentFixture<AddPatientContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPatientContactComponent]
    });
    fixture = TestBed.createComponent(AddPatientContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
