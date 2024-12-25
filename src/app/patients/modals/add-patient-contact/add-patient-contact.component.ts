import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/modeles/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-patient-contact',
  templateUrl: './add-patient-contact.component.html',
  styleUrls: ['./add-patient-contact.component.css']
})
export class AddPatientContactComponent implements OnInit {
  patientForm!: FormGroup;
  patientContacts:Contact[]=[];
  
  constructor(private fb: FormBuilder,private router: Router,private route: ActivatedRoute,
    private patientService:PatientService,private toastr: ToastrService,
     public dialogRef: MatDialogRef<AddPatientContactComponent>,
       @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    const patientId = this.route.snapshot.paramMap.get('id');
    this.patientForm = this.fb.group({
      contacts: this.fb.array([this.createContact()]),
    });
  }

  get contacts(): FormArray {
    return this.patientForm.get('contacts') as FormArray;
  }

  createContact(): FormGroup {
    return this.fb.group({
      email: [''],
      fixe: [''],
      mobile: [''],
    });
  }

  addContact(): void {
    this.contacts.push(this.createContact());
  }

  removeContact(index: number): void {
    this.contacts.removeAt(index);
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
     
      if( this.data.contacts==null){
        this.data.contacts=[]
      }
      this.data.contacts = this.data.contacts.concat(this.patientForm.value.contacts);
      
     
      
      this.patientService.updatePatient(this.data.id,this.data).subscribe((response: any) => {
        this.toastr.success('Contact de '+this.data.prenom +' '+this.data.nom+' ajouté avec succès !')
        this.patientForm.reset();
      }
      ,(error:any)=>{
        this.toastr.error("Erreur sur l'ajout des contacts du Patient!")
      });
      
    }
  }
  

 
}
