import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-event-details-modal',
  templateUrl: './event-details-modal.component.html',
  styleUrls: ['./event-details-modal.component.scss'],
})
export class EventDetailsModalComponent {
  @Input() event: any;

  constructor(private modalController: ModalController) { }

  closeModal() {
    this.modalController.dismiss();
  }
}
