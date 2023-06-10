import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventDetailsModalComponent } from '../event-details-modal/event-details-modal.component';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage {
  selectedDate: string = "";
  newEventTitle: string = "";
  events: any[] = [];

  constructor(private modalController: ModalController) {
    
  }

  
  addEvent() {
    const event = {
      title: this.newEventTitle,
      date: new Date(this.selectedDate),
    };
    this.events.push(event);
    this.newEventTitle = '';
    console.log("Eventos",this.events)
  }
  async openEventDetails(event: any) {
    const modal = await this.modalController.create({
      component: EventDetailsModalComponent, // Crea el componente EventDetailsModalComponent para el contenido del popup
      componentProps: {
        event: event // Pasa el evento seleccionado como propiedad al componente del popup
      }
    });
  
    return await modal.present();
  }
  
}
