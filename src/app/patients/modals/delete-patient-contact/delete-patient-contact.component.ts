import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/modeles/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-delete-patient-contact',
  templateUrl: './delete-patient-contact.component.html',
  styleUrls: ['./delete-patient-contact.component.css']
})
export class DeletePatientContactComponent {
  constructor(public dialogRef: MatDialogRef<DeletePatientContactComponent>,
     private patientService:PatientService,private toastr: ToastrService,
       
        @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  
    confirmDelete(): void {
     
         // Find the index of the target object
            const index = this.data.patient.contacts.findIndex(
                  (c:Contact) =>
                   c.email === this.data.contact.email &&
                   c.mobile === this.data.contact.mobile &&
                   c.fixe === this.data.contact.fixe
            );
    
    
            // Replace the object if found
            if (index !== -1) {
              
              this.data.patient.contacts.splice(index, 1);
            }
          
          this.patientService.updatePatient(this.data.patient.id,this.data.patient).subscribe((response: any) => {
            this.toastr.success('Contact de '+this.data.patient.prenom +' '+this.data.patient.nom+' supprimé avec succès !')
            setTimeout(() => {
              window.location.reload();
            }, 1000);
           ;
            
          }
          ,(error:any)=>{
            this.toastr.error("Erreur sur la suppression des contacts du Patient!")
          });
         
        
      }
  
    cancel(): void {
      this.dialogRef.close(false);
    }

}
