import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePatientContactComponent } from './delete-patient-contact.component';

describe('DeletePatientContactComponent', () => {
  let component: DeletePatientContactComponent;
  let fixture: ComponentFixture<DeletePatientContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePatientContactComponent]
    });
    fixture = TestBed.createComponent(DeletePatientContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
