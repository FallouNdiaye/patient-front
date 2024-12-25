import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'patient-front';
 isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
     .pipe(
       map(result => result.matches),
       shareReplay()
     );
 
   constructor(private breakpointObserver: BreakpointObserver) {}
}
