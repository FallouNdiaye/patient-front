import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPatientContactComponent } from './edit-patient-contact.component';

describe('EditPatientContactComponent', () => {
  let component: EditPatientContactComponent;
  let fixture: ComponentFixture<EditPatientContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPatientContactComponent]
    });
    fixture = TestBed.createComponent(EditPatientContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
