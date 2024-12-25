import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './patients/dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients/patients.component';
import { DetailPatientComponent} from './patients/detail-patient/detail-patient.component';
import { AddPatientComponent } from './patients/add-patient/add-patient.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'patients', component: PatientsComponent },
   { path: 'patients/new', component:  AddPatientComponent },
   { path: 'patients/:id', component: DetailPatientComponent },
  // { path: 'patients/:id/edit', component: PatientFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
