import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';

import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './patients/dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients/patients.component';
import { DetailPatientComponent } from './patients/detail-patient/detail-patient.component';

import { LayoutModule } from '@angular/cdk/layout';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule } from '@angular/material/sort';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { AddPatientComponent } from './patients/add-patient/add-patient.component';
import { EditPatientComponent } from './patients/modals/edit-patient/edit-patient.component';
import { AddPatientContactComponent } from './patients/modals/add-patient-contact/add-patient-contact.component';
import { DeletePatientComponent } from './patients/modals/delete-patient/delete-patient.component';
import { EditPatientContactComponent } from './patients/modals/edit-patient-contact/edit-patient-contact.component';
import { DeletePatientContactComponent } from './patients/modals/delete-patient-contact/delete-patient-contact.component';
import { PatientService } from './services/patient.service';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'; // 
registerLocaleData(localeFr, 'fr'); 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientsComponent,
    DetailPatientComponent,
  
    CardComponent,
    OrdersTableComponent,
    MiniCardComponent,
    AddPatientComponent,
    EditPatientComponent,
    AddPatientContactComponent,
    DeletePatientComponent,
    EditPatientContactComponent,
    DeletePatientContactComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    LayoutModule,
    MatGridListModule,
    MatMenuModule,
    MatSortModule,
    MatChipsModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [
    PatientService,
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'fr' },
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
