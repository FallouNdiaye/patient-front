export class Statistique {
    totalPatients: number = 0;
    totalContacts: number = 0;
  
    
    constructor(data:any) {
      if (data) {
        this.totalPatients = data.totalPatients;
        this.totalContacts = data.totalContacts;
      }
    }
  }