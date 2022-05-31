import { Component,Inject } from '@angular/core';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

var FullCalendar:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'full-calendar-ssr2';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  
  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {
      window.onload = function(){
      var link=document.createElement('link');
      link.href='https://unpkg.com/@fullcalendar/core@4.4.0/main.min.css';
      link.rel='stylesheet';

      var link2=document.createElement('link');
      link2.href='https://unpkg.com/@fullcalendar/daygrid@4.4.0/main.min.css';
      link2.rel='stylesheet';

      var script3=document.createElement('script');
      script3.src='https://unpkg.com/@fullcalendar/core@4.4.0/main.min.js';
  

      var script4=document.createElement('script');
      script4.src='https://unpkg.com/@fullcalendar/daygrid@4.4.0/main.min.js';

      var script=document.createElement("script");
      script.type="text/javascript";
      script.innerHTML=" document.addEventListener('DOMContentLoaded', function() { var calendarEl = document.getElementById('calendar');  var calendar = new FullCalendar.Calendar(calendarEl, {plugins: [ 'dayGrid' ], timeZone: 'UTC', defaultView: 'dayGridMonth', events: 'https://fullcalendar.io/demo-events.json'}); calendar.render(); }); ";
 

      document.getElementsByTagName('head')[0].appendChild(link);
      document.getElementsByTagName('head')[0].appendChild(link2);
      document.getElementsByTagName('head')[0].appendChild(script3);
      document.getElementsByTagName('head')[0].appendChild(script4);
      document.getElementsByTagName('head')[0].appendChild(script);

      var iDiv = document.createElement('div');
      iDiv.id = 'calendar';
      iDiv.className = 'calendar';
      document.getElementsByTagName('body')[0].appendChild(iDiv);

      console.log("ejecutando")
    }
     /* setTimeout(() => {
        console.log("ejecutnadoodjsdfn")
        document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth'
        });
        calendar.render();
      });*/
    
     // }, 5000);
    }


    
  }


}
