import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  template: `
  
  <html>
<head>
<meta charset='utf-8' />



  <style>

    html, body {
      margin: 0;
      padding: 0;
      font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
      font-size: 14px;
    }

    #calendar {
      max-width: 900px;
      margin: 40px auto;
    }

  </style>


<link href='https://unpkg.com/@fullcalendar/core@4.4.0/main.min.css' rel='stylesheet' />


  <link href='https://unpkg.com/@fullcalendar/daygrid@4.4.0/main.min.css' rel='stylesheet' />



<script src='https://unpkg.com/@fullcalendar/core@4.4.0/main.min.js'></script>




  <script src='https://unpkg.com/@fullcalendar/daygrid@4.4.0/main.min.js'></script>



  <script>

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid' ],
      timeZone: 'UTC',
      defaultView: 'dayGridMonth',
      events: 'https://fullcalendar.io/demo-events.json'
    });

    calendar.render();
  });

</script>

</head>
<body>


  <div id='calendar'></div>
</body>

</html>
  
  `,
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
