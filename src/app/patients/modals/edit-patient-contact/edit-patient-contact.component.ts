import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/modeles/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-edit-patient-contact',
  templateUrl: './edit-patient-contact.component.html',
  styleUrls: ['./edit-patient-contact.component.css']
})
export class EditPatientContactComponent {
  patientForm!: FormGroup;
   
  
  constructor(private fb: FormBuilder,private router: Router,private route: ActivatedRoute,
    private patientService:PatientService,private toastr: ToastrService,
    public dialogRef: MatDialogRef<EditPatientContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
    this.patientForm = this.fb.group({
      email: [data.contact.email],
      fixe: [data.contact.fixe],
      mobile: [data.contact.mobile],
    });
   
  }

  ngOnInit(): void {
    const patientId = this.route.snapshot.paramMap.get('id');
   
  }

  

  onSubmit(): void {
    if (this.patientForm.valid) {
     

      
      
     // Find the index of the target object
        const index = this.data.patient.contacts.findIndex(
              (c:Contact) =>
               c.email === this.data.contact.email &&
               c.mobile === this.data.contact.mobile &&
               c.fixe === this.data.contact.fixe
        );

       

        // Replace the object if found
        if (index !== -1) {
          this.data.patient.contacts[index] = this.patientForm.value;
        }
      
      this.patientService.updatePatient(this.data.patient.id,this.data.patient).subscribe((response: any) => {
        this.toastr.success('Contact de '+this.data.patient.prenom +' '+this.data.patient.nom+' modifié avec succès !')
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        
      }
      ,(error:any)=>{
        this.toastr.error("Erreur sur la modification des contacts du Patient!")
      });
     
    }
  }
  

 
}
