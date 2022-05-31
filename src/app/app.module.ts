import { BrowserModule } from '@angular/platform-browser';
//import { FullCalendarModule } from '@fullcalendar/angular';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarioComponent } from './calendario/calendario.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    //FullCalendarModule // for FullCalendar!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
