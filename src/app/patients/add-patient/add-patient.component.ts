import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  patientForm!: FormGroup;

  constructor(private fb: FormBuilder,private patientService:PatientService,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      sexe: ['', Validators.required],
      taille: [''],
      poids: [''],
      mobile: ['', Validators.required],
      email: ['', [Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
    
      this.patientService.addPatient(this.patientForm.value).subscribe((response: any) => {
        this.toastr.success("Patient ajouté avec succès !")
        this.patientForm.reset();
      }
      ,(error:any)=>{
        this.toastr.error("Erreur sur l'ajout du Patient!")
      });
      
      
    }
  }

  onCancel(): void {
    this.patientForm.reset();
  }
}
