import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPageRoutingModule } from './agenda-routing.module';
import { CalendarComponent } from '../calendar/calendar.component';
import { EventDetailsModalComponent } from '../event-details-modal/event-details-modal.component';
import { AgendaPage } from './agenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPageRoutingModule
  ],
  declarations: [AgendaPage, CalendarComponent, EventDetailsModalComponent]
})
export class AgendaPageModule {}
