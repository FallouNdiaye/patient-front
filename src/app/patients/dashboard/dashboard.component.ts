import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { PatientService } from 'src/app/services/patient.service';
import { Statistique } from 'src/app/modeles/statistique';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  

    
  
    statistiqueData = {
      totalPatients: 0,
      totalContacts: 0,
    };
    
    statistiqueWithData = new Statistique(this.statistiqueData);
    miniCardData = [
      {
        title: 'Total Patients',
       
        value: this.statistiqueWithData.totalPatients,
        color: '#5c6bc0',
       
        icon: 'account_circle',
      },
      {
        title: 'Total Contacts',
        
        value:  this.statistiqueWithData.totalContacts,
        color: '#66bb6a',
        
         icon: 'supervisor_account'
      },
     
    ];
  
  
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
     map(({ matches }) => {
       if (matches) {
         return {
           columns: 1,
           miniCard: { cols: 1, rows: 1 },
         
         };
       }
  
      return {
         columns: 2,
         miniCard: { cols: 1, rows: 1 },
         
       };
     })
   );
  
  
  
  constructor(private breakpointObserver: BreakpointObserver,private patientService:PatientService) {}

  ngOnInit(): void {

    this.loadStatistique();
  }

  loadStatistique(): void {
    this.patientService.getStatistique().subscribe(
      (data: Statistique) => {
       this.statistiqueWithData=data
       this.miniCardData = [
        {
          title: 'Total Patients',
         
          value: this.statistiqueWithData.totalPatients,
          color: '#5c6bc0',
         
         
          icon: 'account_circle',
        },
        {
          title: 'Total Contacts',
         
          value:  this.statistiqueWithData.totalContacts,
          color: '#66bb6a',
        
           icon: 'supervisor_account'
        },
       
      ];
      },
      (error) => {
        console.error('Failed to load patients:', error);
      }
    );
  }
}
