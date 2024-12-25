import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent {
  constructor(public dialogRef: MatDialogRef<DeletePatientComponent>,
         @Inject(MAT_DIALOG_DATA) public data: any,
        private patientService:PatientService,private toastr: ToastrService,
  ) {}

   confirmDelete(): void {
      
          
           
           this.patientService.deletePatient(this.data.id).subscribe((response: any) => {
             this.toastr.success('Patient supprimé avec succès !')
             setTimeout(() => {
               window.location.reload();
             }, 1000);
            ;
             
           }
           ,(error:any)=>{
             this.toastr.error("Erreur sur la suppression du Patient!")
           });
           
          
         
       }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
