import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { OrdersTableDataSource, OrdersTableItem } from './orders-table-datasource';
import { MatDialog } from '@angular/material/dialog';
import { EditPatientComponent } from '../patients/modals/edit-patient/edit-patient.component';
import { AddPatientContactComponent } from '../patients/modals/add-patient-contact/add-patient-contact.component';
import { DeletePatientComponent } from '../patients/modals/delete-patient/delete-patient.component';
import { Router } from '@angular/router';
import { Patient } from '../modeles/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements  OnInit {
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'dateNaissance', 'sexe', 'taille', 'poids', 'contacts','actions'];
  dataSource = new MatTableDataSource<Patient>();
  dataLength = 0;
  selectedPatient: Patient | null = null;

  constructor(private dialog: MatDialog,private router: Router,private patientService:PatientService,) {}

  ngOnInit(): void {

    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getPatients().subscribe(
      (data: Patient[]) => {
        this.dataSource.data = data;
        this.dataLength = data.length;
      },
      (error) => {
        console.error('Failed to load patients:', error);
      }
    );
  }
  onModalClose(event: any, patient: Patient): void {
    if (event) {
      // Check if event contains the new contact details
      if (event.email && event.mobile && event.fixe) {
        // Add the returned contact to the patient's contacts list
        patient.contacts.push(event);
      } else {
        console.warn('Modal closed without valid contact data:', event);
      }
    } else {
      console.log('Modal closed without saving data.');
    }
  }
  

  openViewModal(patient: Patient): void {

    this.router.navigate(['/patients', patient.id]); 
  }

  openEditModal(patient: Patient): void {
    this.selectedPatient = patient;
    const dialogRef = this.dialog.open(EditPatientComponent, {
      data: patient,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle updated patient data
      }
      this.selectedPatient = null;
    });
  }

  openAddContactModal(patient: Patient): void {
    this.selectedPatient = patient;
    const dialogRef = this.dialog.open(AddPatientContactComponent, {
      data: patient,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle added contact
      }
      this.selectedPatient = null;
    });
  }

  openDeleteModal(patient: Patient): void {
    this.selectedPatient = patient;
    const dialogRef = this.dialog.open(DeletePatientComponent, {
      data: patient,
    });

   
  }
  

}






