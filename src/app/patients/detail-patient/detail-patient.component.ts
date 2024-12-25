import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Contact, Patient } from 'src/app/modeles/patient';
import { EditPatientContactComponent } from '../modals/edit-patient-contact/edit-patient-contact.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DeletePatientContactComponent } from '../modals/delete-patient-contact/delete-patient-contact.component';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.css']
})
export class DetailPatientComponent {
 // Sample patient object
 patient = {
  nom: 'John',
  prenom: 'Doe',
  sexe: 'Male',
  dateNaissance: '1985-06-15',
  taille: 1.8,
  poids: 75,
  contacts: [
    { email: 'john.doe@example.com', mobile: '123-456-7890', fixe: '123-456-7891' },
    { email: 'j.doe@work.com', mobile: '987-654-3210', fixe: '987-654-3211' },
  ],
};
age!: number;
displayedColumns: string[] = ['email', 'mobile', 'fixe', 'actions'];

dataSource = new MatTableDataSource<Contact>();
dataLength = 0;
 constructor(private dialog: MatDialog,private router: Router,private route: ActivatedRoute,private patientService:PatientService) {}
ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id')!;
  
  this.patientService.getPatient(id).subscribe((data: any) => {
    
     this.patient=data;
     this.dataSource = new MatTableDataSource(this.patient.contacts);
     this.age = this.calculateAge(this.patient.dateNaissance);
  },(error:any)=>{

  });
 
}

 


editContact(contact: any): void {

  
  const dialogRef = this.dialog.open(EditPatientContactComponent, {
    data:  {contact:contact,
      patient:this.patient
    },
    
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Handle updated patient data
    }
    
  });
}

deleteContact(contact: any): void {

   const dialogRef = this.dialog.open(DeletePatientContactComponent, {
    data:  {contact:contact,
      patient:this.patient
    },
      });
  
  // if (confirm(`Are you sure you want to delete this contact?`)) {
  //   const index = this.dataSource.data.indexOf(contact);
  //   if (index >= 0) {
  //     this.dataSource.data.splice(index, 1);
  //     this.dataSource = new MatTableDataSource([...this.dataSource.data]); // Refresh data
  //   }
  // }
}

 

  

  calculateAge(birthDate: string): number {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }
}
