import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent {
 
 
  editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditPatientComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private patientService:PatientService,private toastr: ToastrService,
  ) {
   
    this.editForm = this.fb.group({
      nom: [data.nom],
      prenom: [data.prenom],
      dateNaissance: [data.dateNaissance],
      sexe: [data.sexe],
       taille: [data.taille],
       poids: [data.poids]
      
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.editForm.valid) {

    this.data.nom=this.editForm.value.nom;
    this.data.prenom=this.editForm.value.prenom;
    this.data.dateNaissance=this.editForm.value.dateNaissance;
    this.data.sexe=this.editForm.value.sexe;
    this.data.taille=this.editForm.value.taille;
    this.data.poids=this.editForm.value.poids;

      
     
      
    this.patientService.updatePatient(this.data.id,this.data).subscribe((response: any) => {
      this.toastr.success('Patient modifié avec succès !')
      this.dialogRef.close()
      
    }
    ,(error:any)=>{
      this.toastr.error("Erreur sur la modification des infos du Patient!")
    });
   
  }
}
}
