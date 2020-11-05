import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements OnInit {

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  viewTitle: string;

  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };

  modalReady = true;

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  guardar() {
    this.modalCtrl.dismiss({event: this.event});
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onTimeSelected(ev) {
    console.log('ev: ', ev);
    this.event.startTime = new Date(ev.selectedTime);
  }

}
