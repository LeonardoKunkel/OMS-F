import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { CalModalPage } from './../cal-modal/cal-modal.page';
import { FederalModelPage } from '../federal-model/federal-model.page';
import { EstatalModelPage  }  from '../estatal-model/estatal-model.page';
import { MunicipalModelPage }  from '../municipal-model/municipal-model.page';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  Asea:any="<ul><li>Programa de Mantenimiento Anualizado con programacion de actividades</li><li>Llenado de Bitacoras  NOM-005-ASEA-2016</li><li>Certificados de Funcionamiento de Tierras Fisicas y Sistema Electrico</li><li>Pruebas de Hermeticidad en Tanques y Lineas</li><li>Prueba de la Eficiencia del sistema de recuperacion de vapores (DONDE APLIQUE)</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>"

  cre:any="<ul><li>Estructura de capital</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>"

  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor( 
    private modalCtrl: ModalController,
    private navCtrl:NavController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async alertFederal(){
    const modal = await this.modalCtrl.create({
      component: FederalModelPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });

    await modal.present();
  }

  async alertEstatal(){
    const modal = await this.modalCtrl.create({
      component: EstatalModelPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });

    await modal.present();
  }

  async alertMunicipal(){
    const modal = await this.modalCtrl.create({
      component: MunicipalModelPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });

    await modal.present();
  }

  federal(){
    this.navCtrl.navigateForward('/federal');
  }

  estatal(){
    this.navCtrl.navigateForward('/estatal');
  }
  municipal(){
    this.navCtrl.navigateForward('/municipal');
  }

  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  crearEventosAleatorios() {
    const events = [];
    for (let i = 0; i < 50; i += 1) {
      const date = new Date();
      const eventType = Math.floor(Math.random() * 2);
      const startDay = Math.floor(Math.random() * 90) - 45;
      let endDay = Math.floor(Math.random() * 2) + startDay;
      let startTime;
      let endTime;
      if (eventType === 0) {
        startTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + startDay
          )
        );
        if (endDay === startDay) {
          endDay += 1;
        }
        endTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + endDay
          )
        );
        events.push({
          title: 'Todo el dia - ' + i,
          startTime,
          endTime,
          allDay: true
        });
      } else {
        const startMinute = Math.floor(Math.random() * 24 * 60);
        const endMinute = Math.floor(Math.random() * 180) + startMinute;
        startTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + startDay,
          0,
          date.getMinutes() + startMinute
        );
        endTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + endDay,
          0,
          date.getMinutes() + endMinute
        );
        events.push({
          title: 'Evento - ' + i,
          startTime,
          endTime,
          allDay: false
        });
      }
    }
    this.eventSource = events;
  }

  removerEventos() {
    this.eventSource = [];
  }

  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: CalModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });

    await modal.present();

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.event) {
        const event = result.data.event;
        if (event.allDay) {
          const start = event.startTime;
          event.startTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate()
            )
          );
          event.endTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate() + 1
            )
          );
        }
        this.eventSource.push(result.data.event);
        this.myCal.loadEvents();
      }
    });
  }

}
