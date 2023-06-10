import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  currentDate: Date;
  events: any[] = [];
  newEventTitle: string = '';

  constructor() {
    this.currentDate = new Date();
  }

  ngOnInit() {}

  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
  }

  addEvent() {
    const event = {
      title: this.newEventTitle,
      date: new Date(this.currentDate),
    };
    this.events.push(event);
    this.newEventTitle = '';
  }
}
