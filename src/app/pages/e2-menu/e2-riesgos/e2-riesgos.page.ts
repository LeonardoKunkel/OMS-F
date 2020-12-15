import { E2RiesgosService } from './../../../services/e2-riesgos.service';
import { RiesgosModalPage } from './riesgos-modal/riesgos-modal.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Filesystem, FilesystemDirectory } from '@capacitor/core';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-e2-riesgos',
  templateUrl: './e2-riesgos.page.html',
  styleUrls: ['./e2-riesgos.page.scss'],
})
export class E2RiesgosPage implements OnInit {

  datos: any = {
    F1: '',
    F2: '',
    F3: '',
    F4: '',
    F5: '',
    F6: '',
    F7: '',
    F8: '',
    F9: '',
    F10: '',
    F11: '',
    F12: '',
    F13: '',
    F14: '',
    F15: '',
    F16: '',
    F17: '',
    F18: '',
    C1: '',
    C2: '',
    C3: '',
    C4: '',
    C5: '',
    C6: '',
    C7: '',
    C8: '',
    C9: '',
    C10: '',
    C11: '',
    C12: '',
    C13: '',
    C14: '',
    C15: '',
    C16: '',
    C17: '',
    C18: '',
    M1: '',
    M2: '',
    M3: '',
    M4: '',
    M5: '',
    M6: '',
    M7: '',
    M8: '',
    M9: '',
    M10: '',
    M11: '',
    M12: '',
    M13: '',
    M14: '',
    M15: '',
    M16: '',
    M17: '',
    M18: '',
  };

  pdfObj = null;

  constructor(
    public toast: ToastController,
    private modalCtrl: ModalController,
    private riesgosService: E2RiesgosService,
    private fileOpener: FileOpener,
    private plt: Platform,
    private http: HttpClient
  ) { this.getRiesgos(); }

  ngOnInit() {
  }

  async criterios() {
    const modal = await this.modalCtrl.create({
      component: RiesgosModalPage,
    });
    await modal.present();
  }

  getRiesgos() {
    this.riesgosService.getRiesgos().subscribe((data: any) => {
      console.log(data.riesgos[data.riesgos.length - 1]);
      this.datos = data.riesgos[data.riesgos.length - 1];
    });
  }

  async enviarForm(formulario) {
    console.log(this.datos);

    const toast = await this.toast.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();

    const magnitud1 = this.datos.F1 + this.datos.C1;
    this.datos.M1 = '';
    switch (magnitud1) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M1 = 'IV';
        break;
      case 5:
        this.datos.M1 = 'III';
        break;
      case 6:
        this.datos.M1 = 'II';
        break;
      case 7:
        this.datos.M1 = 'I';
        break;
      case 8:
        this.datos.M1 = 'I';
        break;
    }
    const magnitud2 = this.datos.F2 + this.datos.C2;
    this.datos.M2 = '';
    switch (magnitud2) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M2 = 'IV';
        break;
      case 5:
        this.datos.M2 = 'III';
        break;
      case 6:
        this.datos.M2 = 'II';
        break;
      case 7:
        this.datos.M2 = 'I';
        break;
      case 8:
        this.datos.M2 = 'I';
        break;
    }
    const magnitud3 = this.datos.F3 + this.datos.C3;
    this.datos.M3 = '';
    switch (magnitud3) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M3 = 'IV';
        break;
      case 5:
        this.datos.M3 = 'III';
        break;
      case 6:
        this.datos.M3 = 'II';
        break;
      case 7:
        this.datos.M3 = 'I';
        break;
      case 8:
        this.datos.M3 = 'I';
        break;
    }
    const magnitud4 = this.datos.F4 + this.datos.C4;
    this.datos.M4 = '';
    switch (magnitud4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M4 = 'IV';
        break;
      case 5:
        this.datos.M4 = 'III';
        break;
      case 6:
        this.datos.M4 = 'II';
        break;
      case 7:
        this.datos.M4 = 'I';
        break;
      case 8:
        this.datos.M4 = 'I';
        break;
    }
    const magnitud5 = this.datos.F5 + this.datos.C5;
    this.datos.M5 = '';
    switch (magnitud5) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M5 = 'IV';
        break;
      case 5:
        this.datos.M5 = 'III';
        break;
      case 6:
        this.datos.M5 = 'II';
        break;
      case 7:
        this.datos.M5 = 'I';
        break;
      case 8:
        this.datos.M5 = 'I';
        break;
    }
    const magnitud6 = this.datos.F6 + this.datos.C6;
    this.datos.M6 = '';
    switch (magnitud6) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M6 = 'IV';
        break;
      case 5:
        this.datos.M6 = 'III';
        break;
      case 6:
        this.datos.M6 = 'II';
        break;
      case 7:
        this.datos.M6 = 'I';
        break;
      case 8:
        this.datos.M6 = 'I';
        break;
    }
    const magnitud7 = this.datos.F7 + this.datos.C7;
    this.datos.M7 = '';
    switch (magnitud7) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M7 = 'IV';
        break;
      case 5:
        this.datos.M7 = 'III';
        break;
      case 6:
        this.datos.M7 = 'II';
        break;
      case 7:
        this.datos.M7 = 'I';
        break;
      case 8:
        this.datos.M7 = 'I';
        break;
    }
    const magnitud8 = this.datos.F8 + this.datos.C8;
    this.datos.M8 = '';
    switch (magnitud8) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M8 = 'IV';
        break;
      case 5:
        this.datos.M8 = 'III';
        break;
      case 6:
        this.datos.M8 = 'II';
        break;
      case 7:
        this.datos.M8 = 'I';
        break;
      case 8:
        this.datos.M8 = 'I';
        break;
    }
    const magnitud9 = this.datos.F9 + this.datos.C9;
    this.datos.M9 = '';
    switch (magnitud9) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M9 = 'IV';
        break;
      case 5:
        this.datos.M9 = 'III';
        break;
      case 6:
        this.datos.M9 = 'II';
        break;
      case 7:
        this.datos.M9 = 'I';
        break;
      case 8:
        this.datos.M9 = 'I';
        break;
    }
    const magnitud10 = this.datos.F10 + this.datos.C10;
    this.datos.M10 = '';
    switch (magnitud10) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M10 = 'IV';
        break;
      case 5:
        this.datos.M10 = 'III';
        break;
      case 6:
        this.datos.M10 = 'II';
        break;
      case 7:
        this.datos.M10 = 'I';
        break;
      case 8:
        this.datos.M10 = 'I';
        break;
    }
    const magnitud11 = this.datos.F11 + this.datos.C11;
    this.datos.M11 = '';
    switch (magnitud11) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M11 = 'IV';
        break;
      case 5:
        this.datos.M11 = 'III';
        break;
      case 6:
        this.datos.M11 = 'II';
        break;
      case 7:
        this.datos.M11 = 'I';
        break;
      case 8:
        this.datos.M11 = 'I';
        break;
    }
    const magnitud12 = this.datos.F12 + this.datos.C12;
    this.datos.M12 = '';
    switch (magnitud12) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M12 = 'IV';
        break;
      case 5:
        this.datos.M12 = 'III';
        break;
      case 6:
        this.datos.M12 = 'II';
        break;
      case 7:
        this.datos.M12 = 'I';
        break;
      case 8:
        this.datos.M12 = 'I';
        break;
    }
    const magnitud13 = this.datos.F13 + this.datos.C13;
    this.datos.M13 = '';
    switch (magnitud13) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M13 = 'IV';
        break;
      case 5:
        this.datos.M13 = 'III';
        break;
      case 6:
        this.datos.M13 = 'II';
        break;
      case 7:
        this.datos.M13 = 'I';
        break;
      case 8:
        this.datos.M13 = 'I';
        break;
    }
    const magnitud14 = this.datos.F14 + this.datos.C14;
    this.datos.M14 = '';
    switch (magnitud14) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M14 = 'IV';
        break;
      case 5:
        this.datos.M14 = 'III';
        break;
      case 6:
        this.datos.M14 = 'II';
        break;
      case 7:
        this.datos.M14 = 'I';
        break;
      case 8:
        this.datos.M14 = 'I';
        break;
    }
    const magnitud15 = this.datos.F15 + this.datos.C15;
    this.datos.M15 = '';
    switch (magnitud15) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M15 = 'IV';
        break;
      case 5:
        this.datos.M15 = 'III';
        break;
      case 6:
        this.datos.M15 = 'II';
        break;
      case 7:
        this.datos.M15 = 'I';
        break;
      case 8:
        this.datos.M15 = 'I';
        break;
    }
    const magnitud16 = this.datos.F16 + this.datos.C16;
    this.datos.M16 = '';
    switch (magnitud16) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M16 = 'IV';
        break;
      case 5:
        this.datos.M16 = 'III';
        break;
      case 6:
        this.datos.M16 = 'II';
        break;
      case 7:
        this.datos.M16 = 'I';
        break;
      case 8:
        this.datos.M16 = 'I';
        break;
    }
    const magnitud17 = this.datos.F17 + this.datos.C17;
    this.datos.M17 = '';
    switch (magnitud17) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M17 = 'IV';
        break;
      case 5:
        this.datos.M17 = 'III';
        break;
      case 6:
        this.datos.M17 = 'II';
        break;
      case 7:
        this.datos.M17 = 'I';
        break;
      case 8:
        this.datos.M17 = 'I';
        break;
    }
    const magnitud18 = this.datos.F18 + this.datos.C18;
    this.datos.M18 = '';
    switch (magnitud18) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M18 = 'IV';
        break;
      case 5:
        this.datos.M18 = 'III';
        break;
      case 6:
        this.datos.M18 = 'II';
        break;
      case 7:
        this.datos.M18 = 'I';
        break;
      case 8:
        this.datos.M18 = 'I';
        break;
    }

    this.riesgosService.postRiesgos(this.datos).subscribe(data => {
      console.log(data);
    });
  }

  crearPdf() {
    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getUTCMonth() + 1;
    const year = fecha.getFullYear();
    const dd = {
      // background() {
      //   return {
      //     image: `${marcaAgua}`,
      //     width: 300,
      //     height: 370,
      //     absolutePosition: {x: 250, y: 140}, opacity: 0.4
      //   };
      // },
      header() {
        return {
          table: {
            widths: [150, 590],
            heights: [30, 10, 10],
            body: [
              [
                {
                  // image: `${iconoEstacion}`,
                  // width: 45,
                  // height: 60,
                  // alignment: 'center',
                  // border: [true, true, false, true],
                },
                {
                  // text: `${ddd.nombreEstacionServicio}`, bold: true, fontSize: 25, alignment: 'center', margin: [15, 20],
                  // border: [false, true, true, true],
                }
              ],
              [
                {
                  text: 'EVALUACIÓN DE ASPECTOS AMBIENTALES',
                  fontSize: 9,
                  alignment: 'center',
                  colSpan: 2,
                  border: [true, true, true, true],
                },
                {}
              ],
              [
                {
                  text: 'II. IDENTIFICACIÓN DE PELIGROS Y DE ASPECTOS AMBIENTALES PARA LA EVALUACIÓN DE RIESGOS Y DE IMPACTOS AMBIENTALES',
                  bold: true,
                  alignment: 'center',
                  colSpan: 2,
                  fillColor: '#eeeeee',
                  border: [true, true, true, true],
                },
                {}
              ]
            ]
          },
          margin: [22, 7],
          layout: {
            defaultBorder: false
          }
        };
      },
      footer(currentPage, pageCount) {
        return {
          table: {
            headerRows: 1,
            widths: [650],
            body : [
              [
                {
                  columns: [
                    'Página' + currentPage.toString() + ' de ' + pageCount,
                    {text: `FS-09 Rev. 0,  ${day}/${month}/${year}`, width: 180}
                  ]
                }
              ],
              [
                {
                  // image: `${footer}`,
                  // pageBreak: 'after',
                  // width: 650,
                  // height: 60,
                },
              ],
              [''],
            ]
          },
          layout : 'headerLineOnly',
          margin: [72, 20],
        };
      },
      ///////////////////////
      content: [
        {
          table: {
            widths: [20, 70, 80, 100, 120, 120, 10, 10, 10, 120],
            body: [
              [
                {text: 'NO', bold: true, fillColor: '#ddd'},
                {text: 'Actividades', bold: true, fillColor: '#ddd'},
                {text: 'Peligro', bold: true, fillColor: '#ddd'},
                {text: 'Riesgo asociado', bold: true, fillColor: '#ddd'},
                {text: 'Causas', bold: true, fillColor: '#ddd'},
                {text: 'Salvaguardas', bold: true, fillColor: '#ddd'},
                {text: 'F', bold: true, fillColor: '#ddd'},
                {text: 'C', bold: true, fillColor: '#ddd'},
                {text: 'M', bold: true, fillColor: '#ddd'},
                {text: 'Recomendación', bold: true, fillColor: '#ddd'}
              ],
              [
                {text: 'PROCESO: RECEPCIÓN DE PRODUCTO Y ALMACENAMIENTO', bold: true, fillColor: '#ddd', colSpan: 10},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
              ],
              [
                {text: '1'},
                {text: 'Arribo de autotanque a la Estación de servicio.', fontSize: 8},
                {text: 'a. Maniobra dentro de la estación \n b. Falta de conocimiento o de conciencia del personal.', fontSize: 8},
                {text: 'Golpe a instalaciones u otros vehículos o atropellamiento a personas.', fontSize: 8},
                {text: `a. Falta o mal estado de señalamiento de circulación dentro de la estación de servicio.\n
                        b. Personal no sigue los procedimientos.`, fontSize: 8},
                {text: `a. Abanderar al Autotanque al ingresar a la Estación de Servicio.\n
                        b. Respetar el señalamiento de circulación, dentro de la estación.\n
                        c. Procedimiento de descarga en estaciones de servicio.\n
                        d. Protecciones en las islas de llenado.\n
                        e. Válvulas Shut Off.\n
                        f. Procedimiento preparación de respuesta a emergencias.`, fontSize: 8},
                {text: `${this.datos.F1}`, fontSize: 8},
                {text: `${this.datos.C1}`, fontSize: 8},
                {text: `${this.datos.M1}`, fontSize: 8},
                {text: `a. Cumplir programa de mantenimiento de señalamientos, y procedimiento P-IM-04 \n
                        b. Cumplir procedimiento P-OP-01.`, fontSize: 8},
              ],
              [
                {text: '2', fontSize: 8},
                {text: 'Conexión e inicio de la descarga de producto.', fontSize: 8},
                {text: 'a. Equipos en mal estado \n b. Falta de conocimiento o de conciencia del personal.', fontSize: 8},
                {text: 'Derrame o fuga durante la conexión y/o operación de llenado de tanque de almacenamiento.', fontSize: 8},
                {text: `a. Conexión deficiente o equipo en mal estado.\n
                        b. Conexiones o manguera en mal estado, o falta de juntas.\n
                        c. No se conecta la manguera de recuperación de vapores y la válvula de presión vacío no opera.\n
                        d. Falta de válvula de sobrellenado. \n
                        e. Falta de hermeticidad en las conexiones de las boquillas del tanque.\n
                        f. No se cumple el procedimiento.`, fontSize: 8},
                {text: `a. Mangueras, conexiones, accesorios,válvulas de sobrellenado, accesorios de tanques en buen estado.\n
                        b. Alarma de alto nivel.\n
                        c. Pisos impermeables con pendiente del 1% a registros de drenaje.\n
                        d. Procedimiento de descarga en estaciones de servicio\n
                        e. Procedimiento preparación de respuesta a emergencias.`, fontSize: 8},
                {text: `${this.datos.F2}`, fontSize: 8},
                {text: `${this.datos.C2}`, fontSize: 8},
                {text: `${this.datos.M2}`, fontSize: 8},
                {text: `a. Cumplir programa de mantenimiento de mangueras, conexiones, accesorios,
                           válvulas de sobrellenado, así como de accesorios de tanques y contenedores.P-IM-01.\n
                        b. Cumplir procedimiento de P-0P-01.`, fontSize: 8}
              ],
              [
                {text: '3', fontSize: 8},
                {text: 'Descarga de producto por autotanque.', fontSize: 8},
                {text: 'a. Deslizamiento de autotanque, con desprendimiento de la manguera de descarga en ambos extremos.', fontSize: 8},
                {text: 'Derrame de producto.', fontSize: 8},
                {text: `a. No se colocan las calzas al autotanque antes de iniciar la descarga de producto.\n
                        b. Distracción del personal.`, fontSize: 8},
                {text: `a. Accesorios de descarga para el autotanque.\n
                        b. Válvula de 3 vías del autotanque.\n
                        c. Personal capacitado.\n
                        d. Plan de Respuesta a emergencias`, fontSize: 8},
                {text: `${this.datos.F3}`, fontSize: 8},
                {text: `${this.datos.C3}`, fontSize: 8},
                {text: `${this.datos.M3}`, fontSize: 8},
                {text: `a. Capacitar al personal en el procedimiento P-OP-01.\n
                        b. Cumplir procedimiento p-OP-01.\n
                        c. Verificar estado de accesorios de descarga (calzas).\n
                        d. Verificar la operación de la válvula de 3 vías del autotanque.`, fontSize: 8, pageBreak: 'after'}
              ],
              [
                {text: '4', fontSize: 8},
                {text: 'Descarga de producto.', fontSize: 8},
                {text: 'a. Equipos en mal estado \nb. Falta de conocimiento o de conciencia del personal.', fontSize: 8},
                {text: 'Incendio durante el llenado del tanque de almacenamiento.', fontSize: 8},
                {text: `Previamente ocurre fuga o derrame y la presencia de una fuente de ignición entre otras:
                        a. Uso de celular.\n
                        b. Portar ropa sintética.\n
                        c. Fumar, encender fuego.\n
                        d. Corto circuito en instalación eléctrica.\n
                        e. Tormenta eléctrica.\n
                        f. Corto circuito en instalación eléctrica del autotanque.\n
                        g. Personal no sigue los procedimientos.`, fontSize: 8},
                {text: `a. Mangueras, conexiones, accesorios,válvulas de sobrellenado, accesorios de tanques en buen estado.\n
                        b. Alarma de alto nivel.\n
                        c. Pisos impermeables con pendiente del 1% a registros de drenaje.\n
                        d. Procedimiento de descarga en estaciones de servicio.\n
                        e. Procedimiento preparación de respuesta a emergencias.`, fontSize: 8},
                {text: `${this.datos.F4}`, fontSize: 8},
                {text: `${this.datos.C4}`, fontSize: 8},
                {text: `${this.datos.M4}`, fontSize: 8},
                {text: `a. Cumplir procedimiento de P-OP-01.\n
                        b. Cumplir programa de mantenimiento de instalaciones eléctricas.P-IM-03.`, fontSize: 8}
              ],
              [
                {text: '5', fontSize: 8},
                {text: 'Descarga de producto.', fontSize: 8},
                {text: 'a. Equipos en mal estado. \n b. Falta de conocimiento o de conciencia del personal.', fontSize: 8},
                {text: 'Incendio en tubos de venteo durante el llenado del tanque de almacenamiento.', fontSize: 8},
                {text: `a. Presencia de tormenta eléctrica.\n
                        b. Líneas eléctricas cerca hacen emisión de fuego o chispas.\n
                        c. Ausencia de mantenimiento aválvulas de presión vacío.\n
                        d. Personal no sigue los procedimientos`, fontSize: 8},
                {text: `a. Válvulas de presión y vacío, arrestador de flama e instalaciones eléctricas en buen estado.\n
                        b. Procedimiento preparación de respuesta a emergencias.`, fontSize: 8},
                {text: `${this.datos.F5}`, fontSize: 8},
                {text: `${this.datos.C5}`, fontSize: 8},
                {text: `${this.datos.M5}`, fontSize: 8},
                {text: 'a. Cumplir programa de mantenimiento, P-IM-01 y P-IM-03.\n b. Cumplir procedimiento P-OP-01.', fontSize: 8}
              ],
              [
                {text: '6', fontSize: 8},
                {text: 'Descarga de producto', fontSize: 8},
                {text: 'a. Nivel de producto en tanque es erróneo.\n b. Conexión a tanque diferente.', fontSize: 8},
                {text: 'a. Sobrellenado de tanque de almacenamiento.\n b. Derrame de producto al realizar la desconexión.', fontSize: 8},
                {text: `a. No se verifica la capacidad de recibo del autotanque previo al llenado.\n
                        b. Distracción de la persona al conectar la manguera de descarga.`, fontSize: 8},
                {text: `a. Válvula de sobrellenado.\n
                        b. Personal capacitado.\n
                        c. Procedimiento de recepción de autotanque y llenado de tanques de almacenamiento,\n
                        d. Planes de respuesta a emergencia.`, fontSize: 8},
                {text: `${this.datos.F6}`, fontSize: 8},
                {text: `${this.datos.C6}`, fontSize: 8},
                {text: `${this.datos.M6}`, fontSize: 8},
                {text: `a. Cumplir procedimiento P-OP-01.\n
                        b. Realizar pruebas de operación de paros de emergencia.\n
                        c. Cumplir programa de mantenimiento de válvula de sobrellenado.`, fontSize: 8}
              ],
              [
                {text: '7', fontSize: 8},
                {text: 'Termino de la descarga de producto y desconexión.', fontSize: 8},
                {text: 'a. Equipos en mal estado.\n b. Falta de conocimiento o de conciencia del personal.', fontSize: 8},
                {text: 'Derrame o fuga durante la desconexión al término de la descarga.', fontSize: 8},
                {text: `Desconexión deficiente o equipo en mal estado.\n
                        a. Conexiones o manguera en mal estado, o falta de juntas.\n
                        b. Falta de válvula de sobrellenado.\n
                        c. Falta de hermeticidad en la conexión de la boquilla de llenado de tanque.`, fontSize: 8},
                {text: `a. Mangueras, conexiones, accesorios,válvulas de sobrellenado, accesorios de tanques en buen estado.\n
                        b. Alarma de alto nivel.\n
                        c. Pisos impermeables con pendiente del1% a registros de drenaje.\n
                        d. Procedimiento preparación de respuesta a emergencias.`, fontSize: 8},
                {text: `${this.datos.F7}`, fontSize: 8},
                {text: `${this.datos.C7}`, fontSize: 8},
                {text: `${this.datos.M7}`, fontSize: 8},
                {text: `a. Cumplir procedimiento de descarga P-0P-01.\n
                        b. Cumplir programa de mantenimiento de tanques y accesorios de descarga.P-IM-01.`, fontSize: 8}
              ],
              [
                {text: '8', fontSize: 8},
                {text: 'Salida de autotanque a la Estación de servicio.', fontSize: 8},
                {text: 'Maniobra dentro de la estación.', fontSize: 8},
                {text: 'Golpe a instalaciones u otros vehículos o atropellamiento a personas.', fontSize: 8},
                {text: `a. Falta o mal estado de señalamiento de circulación dentro de la estación de servicio.\n
                        b. Personal no sigue los procedimientos.`, fontSize: 8},
                {text: `a. Abanderamiento al Autotanque al ingresar a la Estación de Servicio.\n
                        b. Respetar el señalamiento de circulación, dentro de la Estación de Servicio.\n
                        c. Procedimiento de descarga en estaciones de servicio.\n
                        d. Protecciones en las islas de llenado.\n
                        e. Válvulas Shut Off.\n
                        f. Procedimiento preparación de respuesta a emergencias.`, fontSize: 8},
                {text: `${this.datos.F8}`, fontSize: 8},
                {text: `${this.datos.C8}`, fontSize: 8},
                {text: `${this.datos.M8}`, fontSize: 8},
                {text: `a. Cumplir procedimiento de Recepción de autotanque y descarga de producto a tanques de almacenamiento. P-OP-01,\n
                        b. Cumplir programa de mantenimiento de señalamientos P-IM-04.`, fontSize: 8}
              ],
              [
                {text: `PROCESO:
                        DESPACHO DE PRODUCTOS INFLAMABLES Y COMBUSTIBLES`, fontSize: 8, colSpan: 10, fillColor: '#ddd', bold: true},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8}
              ],
              [
                {text: '9', fontSize: 8},
                {text: 'Despacho de producto.', fontSize: 8},
                {text: 'a. Equipos en mal estado.\n b. Falta de conocimiento o de conciencia del personal.', fontSize: 8},
                {text: 'Derrame de producto o fuga durante el despacho de producto a vehículos.', fontSize: 8},
                {text: `a. La pistola no para en automático y no detiene el despacho cuando el tanque ya se llenó.\n
                        b. La pistola no contiene el producto al 100% cuando no hay despacho.\n
                        c. El tanque del vehículo se “ahoga” durante la carga y se derrama el producto.\n
                        d. Se retira la pistola sin que termine aún la carga de producto.\n
                        e. Personal no sigue los procedimientos.`, fontSize: 8},
                {text: `a. Pistolas de dispensarios en buen estado.\n
                        b. Paro de emergencia.\n
                        c. Procedimiento de despacho a automóviles.\n
                        d. Procedimiento preparación de respuesta a emergencias.`, fontSize: 8},
                {text: `${this.datos.F9}`, fontSize: 8},
                {text: `${this.datos.C9}`, fontSize: 8},
                {text: `${this.datos.M9}`, fontSize: 8},
                {text: `a. Cumplir programa de mantenimiento a dispensarios. -IM-02\n
                        b. Cumplir procedimiento de despacho a automóviles. P-OP-02`, fontSize: 8}
              ],
              [
                {text: '10', fontSize: 8},
                {text: 'Despacho de producto.', fontSize: 8},
                {text: 'Distracción o mala intención del conductor del vehículo.', fontSize: 8},
                {text: 'Derrame por desprendimiento de manguera de despacho de combustible por desplazamiento del vehículo.', fontSize: 8},
                {text: `a. No se retira inmediatamente la pistola al término del llenado.\n
                        b. El despachador no acomoda bien la manguera después de retirar la pistola y el vehículo avanza
                           y desprende la manguera porque se atoró con alguna parte del vehículo.\n
                        c. El conductor avanza con su vehículo en forma intencionada para no pagar o por distracción.\n
                        d. Personal no cumple los`, fontSize: 8},
                {text: `a. Pistolas de dispensarios en buen estado.\n
                        b. Paro de emergencia.\n
                        c. Procedimiento de despacho a automóviles.\n
                        d. Procedimiento preparación de respuesta a emergencias.`, fontSize: 8},
                {text: `${this.datos.F10}`, fontSize: 8},
                {text: `${this.datos.C10}`, fontSize: 8},
                {text: `${this.datos.M10}`, fontSize: 8},
                {text: `a. Cumplir programa de mantenimiento a dispensarios. P-IM-02.\n
                        b. Cumplir procedimiento de despacho a automóviles, P-OP-02.`, fontSize: 8}
              ],
              [
                {text: '11', fontSize: 8},
                {text: 'Despacho de producto.', fontSize: 8},
                {text: 'Distracción o mala intención del conductor del vehículo.', fontSize: 8},
                {text: 'Derrame por derribo del dispensario por automóvil o camión y no opera la válvula shut-off.', fontSize: 8},
                {text: `No depende relativamente de la estación de servicio, sin embargo, se puede considerar:\n
                        a. Falta de carril de desaceleración.\n
                        b. Falta de señalamientos. \nc. Falta de vibradores o topes.`, fontSize: 8},
                {text: `a. Válvula Shut-off \n
                        b. Protecciones de isla.\n
                        c. Señalamientos de velocidad máxima y sentido de circulación.\n
                        d. Procedimiento preparación de respuesta a emergencias.\n
                        e. Capacitación al personal de los procedimientos que le aplican.`, fontSize: 8},
                {text: `${this.datos.F11}`, fontSize: 8},
                {text: `${this.datos.C11}`, fontSize: 8},
                {text: `${this.datos.M11}`, fontSize: 8},
                {text: `a. Capacitar al personal de mantenimiento y despachadores.\n
                        b. Cumplir programa de mantenimiento a dispensarios.\n
                        c. Aplicar Plan de respuesta a emergencias.`, fontSize: 8}
              ],
              [
                {text: '12', fontSize: 8},
                {text: 'Despacho de producto.', fontSize: 8},
                {text: 'a. Equipos en mal estado.\nb. Falta de conocimiento o de conciencia del personal.', fontSize: 8},
                {text: 'Incendio en el área de despacho, por derribo de dispensario o desprendimiento de manguera.', fontSize: 8},
                {text: `Previamente, debe ocurrir una fuga o derrame y posterior el contacto con una fuente de ignición.\n
                        a. Uso de teléfono celular.\n
                        b. Pasar corriente a otro vehículo en el área de despacho.\n
                        c. Fumar, encender fósforos.\n
                        d. Contacto de los vapores con una parte caliente del vehículo.\n
                        e. Falta de integridad eléctrica en instalaciones.\n
                        f. Personal no sigue los procedimientos.`, fontSize: 8},
                {text: `Válvula Shut-off \n
                        a. Protecciones de isla.\n
                        b. Señalamientos de velocidad máxima, sentido de circulación, de no fumar y de no uso de celular.\n
                        c. Procedimiento de despacho a automóviles.\n
                        d. Procedimiento preparación de respuesta a emergencias`, fontSize: 8},
                {text: `${this.datos.F12}`, fontSize: 8},
                {text: `${this.datos.C12}`, fontSize: 8},
                {text: `${this.datos.M12}`, fontSize: 8},
                {text: `a. Capacitar al personal de mantenimiento.\n
                        b. Cumplir programa de mantenimiento a Instalaciones.\n
                        c. Aplicar Plan de Respuesta a emergencias.`, fontSize: 8}
              ],
              [
                {text: 'PROCESO: ACTIVIDADES DE APOYO', fontSize: 8, colSpan: 10, fillColor: '#ddd', bold: true},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8}
              ],
              [
                {text: '13', fontSize: 8},
                {text: 'Ejecución de trabajos de mantenimiento.', fontSize: 8},
                {text: 'a. Equipos en mal estado.\nb. Falta de conocimiento o de conciencia del personal.', fontSize: 8},
                {text: 'Derrame o fuga durante la ejecución de trabajos de mantenimiento.', fontSize: 8},
                {text: `a. No se realiza permiso de trabajo peligroso.\n
                        b. No se identifican los riesgos de hacer un trabajo peligroso.\n
                        c. No se vacía o de presiona la tubería.\n
                        d. No se colocan bloqueos en válvulas y tablero de control`, fontSize: 8},
                {text: `a. Procedimiento de permiso de trabajo peligroso.\n
                        b. Procedimiento de etiqueta bloqueo y candadeo de líneas.\n
                        c. Procedimiento preparación de respuesta a emergencias.\n
                        d. Permiso de trabajos peligrosos\n
                        e. Procedimiento de Integridad Mecánica.`, fontSize: 8},
                {text: `${this.datos.F13}`, fontSize: 8},
                {text: `${this.datos.C13}`, fontSize: 8},
                {text: `${this.datos.M13}`, fontSize: 8},
                {text: 'a. Capacitar al personal de mantenimiento. \nb. Cumplir programa de mantenimiento a Instalaciones.', fontSize: 8}
              ],
              [
                {text: '14', fontSize: 8},
                {text: 'Operación normal', fontSize: 8},
                {text: 'Trampa de combustibles con hidrocarburos.', fontSize: 8},
                {text: 'Incendio en Trampa de Combustibles.', fontSize: 8},
                {text: `a. No se limpia el drenaje y trampa después de un derrame.\n
                        b. Cultura deficiente en materia Ambiental y de seguridad.`, fontSize: 8},
                {text: `a. Verificación diaria de trampa de combustibles.\n
                        b. Procedimiento preparación de respuesta a emergencias.`, fontSize: 8},
                {text: `${this.datos.F14}`, fontSize: 8},
                {text: `${this.datos.C14}`, fontSize: 8},
                {text: `${this.datos.M14}`, fontSize: 8},
                {text: 'aa. Mantener trampa de combustibles libre de hidrocarburos. peligrosos.', fontSize: 8}
              ],
              [
                {text: '15', fontSize: 8},
                {text: 'Vandalismo', fontSize: 8},
                {text: 'Incendio en área de despacho.', fontSize: 8},
                {text: 'No depende de la estación de servicio, si se trata de una manifestación social.', fontSize: 8},
                {text: `a. Procedimiento de atención a casos de vandalismo.\n
                        b. Planes de Respuesta a emergencias.\n
                        c. Paro de emergencia. \n
                        d. Válvula shut-off.`, fontSize: 8},
                {text: `a. Verificación diaria de trampa de combustibles.\n
                        b. Procedimiento preparación de respuesta a emergencias.`, fontSize: 8},
                {text: `${this.datos.F15}`, fontSize: 8},
                {text: `${this.datos.C15}`, fontSize: 8},
                {text: `${this.datos.M15}`, fontSize: 8},
                {text: 'aa. Mantener trampa de combustibles libre de hidrocarburos. peligrosos.', fontSize: 8}
              ],
              [
                {text: '16', fontSize: 8},
                {text: 'Instalaciones eléctricas en operación.', fontSize: 8},
                {text: 'a. Equipos en mal estado. \nb. Falta de conocimiento o de conciencia del personal.', fontSize: 8},
                {text: 'Incendio en Instalaciones eléctricas.', fontSize: 8},
                {text: 'Mantenimiento deficiente.', fontSize: 8},
                {text: `a. Instalaciones eléctricas en buen estado de la estación de servicio.\n
                        b. Procedimiento de mantenimiento de instalaciones eléctricas.\n
                        c. Paro de emergencia.\n
                        d. Procedimiento preparación de respuesta a emergencias.\n
                        e. Especificaciones de diseño de la E.S.`, fontSize: 8},
                {text: `${this.datos.F16}`, fontSize: 8},
                {text: `${this.datos.C16}`, fontSize: 8},
                {text: `${this.datos.M16}`, fontSize: 8},
                {text: 'a. Capacitar al personal de mantenimiento.\nb. Cumplir programa de mantenimiento a Instalaciones.', fontSize: 8}
              ],
              [
                {text: '17', fontSize: 8},
                {text: 'Operación normal', fontSize: 8},
                {text: 'Sismo de magnitud considerable.', fontSize: 8},
                {text: 'Contaminación de subsuelo y mantos freáticos por fuga o derrame de combustible.', fontSize: 8},
                {text: `a. Ruptura de tuberías interconectadas a los tanques de almacenamiento.\n
                        b. Fenómeno geológico que no depende de la estación de servicio.`, fontSize: 8},
                {text: `a. Monitoreo de subsuelo por medio de pozos de observación y pozos de monitoreo.\n
                        b. Detector de fugas en contenedores.\n
                        c. Pruebas de hermeticidad en tanques y tuberías.\n
                        d. Procedimiento preparación de respuesta a emergencias.\n
                        e. Diseño de la E.S.`, fontSize: 8},
                {text: `${this.datos.F17}`, fontSize: 8},
                {text: `${this.datos.C17}`, fontSize: 8},
                {text: `${this.datos.M17}`, fontSize: 8},
                {text: `a. Cumplir monitoreo periódico de subsuelo y mantos freáticos.\n
                        b. Cumplir programa de mantenimiento a detectores de sensores.`, fontSize: 8}
              ],
              [
                {text: '18', fontSize: 8},
                {text: 'Inundación', fontSize: 8},
                {text: 'Sismo de magnitud considerable.', fontSize: 8},
                {text: 'Contaminación de subsuelo y mantos freáticos por fuga o derrame de combustible.', fontSize: 8},
                {text: `a. Ruptura de tuberías interconectadas a los tanques de almacenamiento.\n
                        b. Fenómeno geológico que no depende de la estación de servicio.`, fontSize: 8},
                {text: `a. Monitoreo de subsuelo por medio de pozos de observación y pozos de monitoreo.\n
                        b. Detector de fugas en contenedores.\n
                        c. Pruebas de hermeticidad en tanques y tuberías.\n
                        d. Procedimiento preparación de respuesta a emergencias.\n
                        e. Diseño de la E.S.`, fontSize: 8},
                {text: `${this.datos.F18}`, fontSize: 8},
                {text: `${this.datos.C18}`, fontSize: 8},
                {text: `${this.datos.M18}`, fontSize: 8},
                {text: `a. Cumplir monitoreo periódico de subsuelo y mantos freáticos.\n
                        b. Cumplir programa de mantenimiento a detectores de sensores.`, fontSize: 8}
              ],
              [
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''}
              ]
            ]
          }
        },
        {
          text: '\n\n'
        },
        {
          table: {
            widths: [200, 200, 140],
            heights: [50, 30],
            body: [
              [
              //   {
              //     image: `${firmaRepresentanteTecnico}`,
              //     fit: [100, 50],
              //     alignment: 'center',
              //     border: [true, true, true, false],
              //     pageBreak: 'before'
              //   },
              //   {
              //     image: `${firmaEstacion}`,
              //     fit: [100, 50],
              //     alignment: 'center',
              //     border: [true, true, true, false],
              //     pageBreak: 'before'
              //   },
              //   {
              //     text: '',
              //     fit: [100, 50],
              //     alignment: 'center',
              //     border: [true, true, true, false],
              //     pageBreak: 'before'
              //   }
              // ],
              // [
              //   {
              //     text: `REVISADO POR:\n ${ddd.representanteTecnico} \n REPRESENTANTE TÉCNICO`,
              //     alignment: 'center',
              //     border: [true, false, true, true]
              //   },
              //   {
              //     text: `APROBADO POR:\n${ddd.maximaAutoridad}\nMAXIMA AUTORIDAD`,
              //     alignment: 'center',
              //     border: [true, false, true, true]
              //   },
              //   {
              //     text: `FECHA DE APROBACIÓN:\n${day}/${month}/${year}`,
              //     alignment: 'center',
              //     border: [true, false, true, true]
              //   }
              ]
            ]
          },
          layout: {
            defaultBorder: false
          },
          margin: [85, 0]
        }
      ],
      pageOrientation: 'landscape',
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfObj = pdfMake.createPdf(dd);
    console.log(this.pdfObj);
  }

  descargarPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBase64(async (data) => {
        try {
          const path = `pdf/Riesgos_${Date.now()}.pdf`;

          const result = await Filesystem.writeFile({
            path,
            data,
            directory: FilesystemDirectory.Documents,
            recursive: true
          });
          this.fileOpener.open(`${result.uri}`, 'application/pdf');
        } catch (e) {
          console.error('Unable to write file', e);
        }
      });
    } else {
      this.pdfObj.download();
    }
  }

}
