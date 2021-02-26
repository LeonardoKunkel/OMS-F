// import { E2RiesgosService } from './../../../services/e2-riesgos.service';
import { RiesgosModalPage } from './riesgos-modal/riesgos-modal.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { Cell, Columns, Img, PdfMakeWrapper, Table, Txt, Ul }  from 'pdfmake-wrapper';
import { fn } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute } from '@angular/router';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e2-riesgos',
  templateUrl: './e2-riesgos.page.html',
  styleUrls: ['./e2-riesgos.page.scss'],
})
export class E2RiesgosPage implements OnInit {

  @ViewChild('mySlider')  slides: IonSlides;

  public swipeNext(){
    this.slides.slideNext();
  }
  
  public swipeBack(){
    this.slides.slidePrev();
  }

  riesgos:any=[
    {
      actividad:'Arribo de autotanque a la Estación de servicio.',
      peligros:[
        'Maniobra dentro de la estación.',
        'Falta de conocimiento o de conciencia del personal.'
      ],
      riesgoAsociado:'Golpe a instalaciones u otros vehículos o atropellamiento a personas.',
      causas:[
        'Falta o mal estado de señalamiento de circulación dentro de la estación de servicio.',
        'Personal no sigue los procedimientos.'
      ],
      salvaGuardas:[
        'Abanderar al Autotanque al ingresar a la Estación de Servicio.',
        'Respetar el señalamiento de circulación, dentro de la estación.',
        'Procedimiento de descarga en estaciones de servicio.',
        'Protecciones en las islas de llenado.',
        'Válvulas Shut Off.',
        'Procedimiento preparación de respuesta a emergencias.',
      ],
      recomendaciones:[
        'Cumplir programa de mantenimiento de señalamientos, y procedimiento P-IM-04',
        'Cumplir procedimiento P-OP-01.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Conexión e inicio de la descarga de producto.',
      peligros:[
        'Equipos en mal estado.',
        'Falta de conocimiento o de conciencia del personal.'
      ],
      riesgoAsociado:'Derrame o fuga durante la conexión y/o operación de llenado de tanque de almacenamiento.',
      causas:[
        'Conexión deficiente o equipo en mal estado.',
        'Conexiones o manguera en mal estado, o falta de juntas.',
        'No se conecta la manguera de recuperación de vapores y la válvula de presión vacío no opera',
        'Falta de válvula de sobrellenado.',
        'Falta de hermeticidad en las conexiones de las boquillas del tanque.',
        'No se cumple el procedimiento.'
      ],
      salvaGuardas:[
        'Mangueras, conexiones, accesorios, válvulas de sobrellenado, accesorios de tanques en buen estado.',
        'Alarma de alto nivel.',
        'Pisos impermeables con pendiente del 1% a registros de drenaje.',
        'Procedimiento de descarga en estaciones de servicio',
        'Procedimiento preparación de respuesta a emergencias.'
      ],
      recomendaciones:[
        'Cumplir programa de mantenimiento de mangueras, conexiones, accesorios, válvulas de sobrellenado, así como de accesorios de tanques y contenedores. P-IM-01',
        'Cumplir procedimiento P-OP-01.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Descarga de producto por autotanque.',
      peligros:[
        'Deslizamiento de autotanque, con desprendimiento de la manguera de descarga en ambos extremos'
      ],
      riesgoAsociado:'Derrame de producto.',
      causas:[
        'No se colocan las calzas al autotanque antes de iniciar la descarga de producto.',
        'Distracción del personal.'
      ],
      salvaGuardas:[
        'Accesorios de descarga para el autotanque.',
        'Válvula de 3 vías del autotanque.',
        'Personal capacitado.',
        'Plan de Respuesta a emergencias'
      ],
      recomendaciones:[
        'Capacitar al personal en el procedimiento P-OP-01.',
        'Cumplir procedimiento p-OP-01.',
        'Verificar estado de accesorios de descarga (calzas).',
        'Verificar la operación de la válvula de 3 vías del autotanque.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Descarga de producto.',
      peligros:[
        'Equipos en mal estado.',
        'Falta de conocimiento o de conciencia del personal.'
      ],
      riesgoAsociado:'Incendio durante el llenado del tanque de almacenamiento.',
      causas:[
        'Previamente ocurre fuga o derrame y la presencia de una fuente de ignición entre otras:',
        'Uso de celular.',
        'Portar ropa sintética.',
        'Fumar, encender fuego.',
        'Corto circuito en instalación eléctrica.',
        'Tormenta eléctrica.',
        'Corto circuito en instalación eléctrica del autotanque. ',
        'Personal no sigue los procedimientos.'
      ],
      salvaGuardas:[
        'Mangueras, conexiones, accesorios, válvulas de sobrellenado, accesorios de tanques en buen estado.',
        'Alarma de alto nivel.',
        'Pisos impermeables con pendiente del 1% a registros de drenaje.',
        'Procedimiento de descarga en estaciones de servicio.',
        'Procedimiento preparación de respuesta a emergencias.'
      ],
      recomendaciones:[
        'Cumplir procedimiento de P-OP-01.',
        'Cumplir programa de mantenimiento de instalaciones eléctricas.P-IM-03.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Descarga de producto.',
      peligros:[
        'Equipos en mal estado.',
        'Falta de conocimiento o de conciencia del personal.'
      ],
      riesgoAsociado:'Derrame o fuga durante la conexión y/o operación de llenado de tanque de almacenamiento.',
      causas:[
        'Presencia de tormenta eléctrica.',
        'Líneas eléctricas cerca hacen emisión de fuego o chispas.',
        'Ausencia de mantenimiento a válvulas de presión vacío.',
        'Personal no sigue los procedimientos'
      ],
      salvaGuardas:[
        'Válvulas de presión y vacío, arrestador de flama e instalaciones eléctricas en buen estado.',
        'Procedimiento preparación de respuesta a emergencias.'
      ],
      recomendaciones:[
        'Cumplir programa de mantenimiento, P-IM-01 y P-IM-03.',
        'Cumplir procedimiento P-OP-01.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Descarga de producto.',
      peligros:[
        'Nivel de producto en tanques es erróneo.',
        'Conexión a tanque diferente.'
      ],
      riesgoAsociado:'Sobrellenado de tanque de almacenamiento./Derrrame de producto al realizar la desconexión.',
      causas:[
        'No se verifica la capacidad de recibo del autotanque previo al llenado.',
        'Distracción de la persona al conectar la manguera de descarga'
      ],
      salvaGuardas:[
        'Válvula de sobrellenado.',
        'Personal capacitado.',
        'Procedimiento de recepción de autotanque y llenado de tanques de almacenamiento',
        'Planes de respuesta a emergencia.'
      ],
      recomendaciones:[
        'Cumplir procedimiento P-OP-01.',
        'Realizar pruebas de operación de paros de emergencia.',
        'Cumplir programa de mantenimiento de válvula de sobrellenado.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Término de la descarga de producto y desconexión.',
      peligros:[
        'Equipos en mal estado',
        'Falta de conocimiento o de conciencia del personal.'
      ],
      riesgoAsociado:'Derrame o fuga durante la desconexión al término de la descarga.',
      causas:[
        'Desconexión deficiente o equipo en mal estado',
        'Conexiones o manguera en mal estado, o falta de juntas.',
        'Falta de válvula de sobrellenado',
        'Falta de hermeticidad en la conexión de la boquilla de llenado de tanque.',
        'Personal no sigue los procedimientos'
      ],
      salvaGuardas:[
        'Mangueras, conexiones, accesorios, válvulas de sobrellenado, accesorios de tanques en buen estado.',
        'Alarma de alto nivel.',
        'Pisos impermeables con pendiente del1% a registros de drenaje.',
        'Procedimiento preparación de respuesta a emergencias.'
      ],
      recomendaciones:[
        'Cumplir procedimiento de descarga P-0P-01',
        'Cumplir programa de mantenimiento de tanques y accesorios de descarga. P-IM-01.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Salida de autotanque a la estación de Servicio.',
      peligros:[
        'Maniobra dentro de la estación.'
      ],
      riesgoAsociado:'Golpe a instalaciones u otros vehículos o atropellamiento a personas.',
      causas:[
        'Falta o mal estado de señalamiento de circulación dentro de la estación de servicio.',
        'Personal no sigue los procedimientos.'
      ],
      salvaGuardas:[
        'Abanderamiento al Autotanque al ingresar a la Estación de Servicio.',
        'Respetar el señalamiento de circulación, dentro de la Estación de Servicio.',
        'Procedimiento de descarga en estaciones de servicio.',
        'Protecciones en las islas de llenado.',
        'Válvulas Shut Off.',
        'Procedimiento preparación de respuesta a emergencias.'
      ],
      recomendaciones:[
        'Cumplir procedimiento de Recepción de autotanque y descarga de producto a tanques de almacenamiento. P-OP-01,',
        'Cumplir programa de mantenimiento de señalamientos P-IM-04.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Despacho de producto.',
      peligros:[
        'Equipos en mal estado.',
        'Falta de conocimiento o de conciencia del personal.'
      ],
      riesgoAsociado:'Derrame de producto o fuga durante el despacho de producto a vehículos.',
      causas:[
        'La pistola no para en automático y no detiene el despacho cuando el tanque ya se llenó.',
        'La pistola no contiene el producto al 100% cuando no hay despacho.',
        'El tanque del vehículo se “ahoga” durante la carga y se derrama el producto.',
        'Se retira la pistola sin que termine aún la carga de producto.',
        'Personal no sigue los procedimientos.'
      ],
      salvaGuardas:[
        'Pistolas de dispensarios en buen estado.',
        'Paro de emergencia.',
        'Procedimiento de despacho a automóviles.',
        'Procedimiento preparación de respuesta a emergencias.'
      ],
      recomendaciones:[
        'Cumplir programa de mantenimiento a dispensarios. -IM-02',
        'Cumplir procedimiento de despacho a automóviles. P-OP-02'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Despacho de producto.',
      peligros:[
        'Distracción o mala intención del conductor del vehículo.'
      ],
      riesgoAsociado:'Derrame por desprendimiento de manguera de despacho de combustible por desplazamiento de vehículo.',
      causas:[
        'No se retira inmediatamente la pistola al término del llenado.',
        'El despachador no acomoda bien la manguera después de retirar la pistola y el vehículo avanza y desprende la manguera porque se atoró con alguna parte del vehículo. ',
        'El conductor avanza con su vehículo en forma intencionada para no pagar o por distracción.',
        'Personal no cumple los procedimientos.'
      ],
      salvaGuardas:[
        'Válvulas Break-Away',
        'Procedimiento de despacho a automóviles.',
        'Procedimiento preparación de respuesta a emergencias.'
      ],
      recomendaciones:[
        'Cumplir programa de mantenimiento a dispensarios. P-IM-02.',
        'Cumplir procedimiento de despacho a automóviles, P-OP-02.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Despacho de producto',
      peligros:[
        'Distracción o mala intención del conductor del vehículo.'
      ],
      riesgoAsociado:'Derrame por derribo del dispensario por automóvil o camión y no opera la válvula shut-off.',
      causas:[
        'No depende relativamente de la estación de servicio, sin embargo, se puede considerar:',
        'Falta de carril de desaceleración.',
        'Falta de señalamientos.',
        'Falta de vibradores o topes.'
      ],
      salvaGuardas:[
        'Válvula Shut-off',
        'Protecciones de isla',
        'Señalamientos de velocidad máxima y sentido de circulación',
        'Procedimiento preparación de respuesta a emergencias.',
        'Capacitación al personal de los procedimientos que le aplican.'
      ],
      recomendaciones:[
        'Capacitar al personal de mantenimiento y despachadores.',
        'Cumplir programa de mantenimiento a dispensarios.',
        'Aplicar Plan de respuesta a emergencias.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Ejecución de trabajos de mantenimiento.',
      peligros:[
        'Equipos en mal estado.',
        'Falta de conocimiento o de conciencia del personal.'
      ],
      riesgoAsociado:'Derrame o fuga durante la ejecución de trabajos de mantenimiento.',
      causas:[
        'Previamente, debe ocurrir una fuga o derrame y posterior el contacto con una fuente de ignición.',
        'Uso de teléfono celular.',
        'Pasar corriente a otro vehículo en el área de despacho.',
        'Fumar, encender fósforos.',
        'Contacto de los vapores con una parte caliente del vehículo.',
        'Falta de integridad eléctrica en instalaciones.',
        'Personal no sigue los procedimientos.'
      ],
      salvaGuardas:[
        'Válvula Shut-off',
        'Protecciones de isla',
        'Señalamientos de velocidad máxima, sentido de circulación, de no fumar y de no uso del celular.',
        'Procedimiento de despacho a automóviles.',
        'Procedimiento preparación de respuesta a emergencias'
      ],
      recomendaciones:[
        'Capacitar al personal de mantenimiento. ',
        'Cumplir programa de mantenimiento a Instalaciones.',
        'Aplicar Plan de Respuesta a emergencias.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Operación normal.',
      peligros:[
        'Trampa de combustibles con hidrocarburos.'
      ],
      riesgoAsociado:'Incendio en trampa de Combustibles.',
      causas:[
        'No se realiza permiso de trabajo peligroso.',
        'No se identifican los riesgos de hacer un trabajo peligroso.',
        'No se vacía o presiona la tubería',
        'No se colocan bloqueos en válvulas y tablero de control'
      ],
      salvaGuardas:[
        'Procedimiento de permiso de trabajo peligroso.',
        'Procedimiento de etiqueta bloqueo y candadeo de líneas.',
        'Procedimiento preparación de respuesta a emergencias.',
        'Permiso de trabajos peligrosos',
        'Procedimiento de Integridad Mecánica.'
      ],
      recomendaciones:[
        'Capacitar al personal de mantenimiento. ',
        'Cumplir programa de mantenimiento a Instalaciones.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Operación normal.',
      peligros:[
        'Vandalismo.'
      ],
      riesgoAsociado:'Incendio en área de despacho.',
      causas:[
        'No se limpia el drenaje y la trampa después de un derrame.',
        'Cultura deficiente en materia Ambiental y de seguridad.',
        'Desconocimiento de las instalaciones. '
      ],
      salvaGuardas:[
        'Verificación diaria de trampa de combustibles.',
        'Procedimiento preparación de respuesta a emergencias.',
        'Programa de Mantenimiento.',
        'Procedimiento de integridad Mecánica y Aseguramiento de la Calidad.',
        'Procedimiento de Mantenimiento a Drenajes'
      ],
      recomendaciones:[
        'Mantener trampa de combustibles libre de hidrocarburos. peligrosos. ',
        'Cumplir con Programa de mantenimiento de drenajes. ',
        'Cumplir con programa de mantenimiento de tanques y de dispensarios.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Instalaciones eléctricas en operación.',
      peligros:[
        'Equipos en mal estado.',
        'Falta de conocimiento o de conciencia del personal.'
      ],
      riesgoAsociado:'Incendio en instalaciones eléctricas.',
      causas:[
        'No depende de la estación de servicio, si se trata de una manifestación social'
      ],
      salvaGuardas:[
        'Procedimiento de atención a casos de vandalismo.',
        'Planes de Respuesta a emergencias.',
        'Paro de emergencia.',
        'Válvula shut-off.'
      ],
      recomendaciones:[
        'Capacitar al personal de cómo actuar en caso de vandalismo.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Operación normal.',
      peligros:[
        'Sismo de magnitud considerable.'
      ],
      riesgoAsociado:'Contaminación de subsuelo y mantos freáticos por fuga o derrame de combustible.',
      causas:[
        'Mantenimiento deficiente.'
      ],
      salvaGuardas:[
        'Instalaciones eléctricas en buen estado de la estación de servicio.',
        'Procedimiento de mantenimiento de instalaciones eléctricas.',
        'Paro de emergencia.',
        'Procedimiento preparación de respuesta a emergencias.',
        'Especificaciones de diseño de la E.S.'
      ],
      recomendaciones:[
        'Capacitar al personal de mantenimiento.',
        'Cumplir programa de mantenimiento a Instalaciones.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Operación normal.',
      peligros:[
        'Inundación.'
      ],
      riesgoAsociado:'Contaminación de subsuelo y mantos freáticos por fuga o derrame de combustible.',
      causas:[
        'Ruptura de tuberías interconectadas a los tanques de almacenamiento.',
        'Fenómeno geológico que no depende de la estación de servicio.'
      ],
      salvaGuardas:[
        'Monitoreo de subsuelo por medio de pozos de observación y pozos de monitoreo.',
        'Detector de fugas en contenedores.',
        'Pruebas de hermeticidad en tanques y tuberías.',
        'Procedimiento preparación de respuesta a emergencias.',
        'Diseño de la E.S.'
      ],
      recomendaciones:[
        'Cumplir monitoreo periódico de subsuelo y mantos freáticos. ',
        'Cumplir programa de mantenimiento a detectores de sensores.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    },
    {
      actividad:'Operación normal',
      peligros:[
        'Inundación'
      ],
      riesgoAsociado:'Contaminación de subsuelo y mantos freáticos por fuga o derrame de combustible.',
      causas:[
        'Fenómeno geológico que no depende de la estación de servicio.'
      ],
salvaGuardas:[
        'Monitoreo de subsuelo por medio de pozos de observación y pozos de monitoreo.',
        'Detector de fugas en contenedores.',
        'Procedimiento preparación de respuesta a emergencias.'
      ],
      recomendaciones:[
        'Cumplir monitoreo periódico de subsuelo y mantos freáticos.',
        'Cumplir programa de mantenimiento a detectores de fugas.'
      ],
      frecuencia:null,
      consecuencia:null,
      magnitud:null
    }
  ]

   idEstacion=''
   datosEstacion:any={};

  constructor(
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private _estacionService: EstacionService
  ) { 
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.idEstacion = id;
    this.getEstacion(id);
   }

  ngOnInit() {
  }
  
  getEstacion(id: string){
    this._estacionService.getEstacionId(id).subscribe((data: any) => {
      this.datosEstacion = data;
      console.log(data ,'Riesgos');
    });
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: RiesgosModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  onClick(){
    for (let i = 0; i < this.riesgos.length; i++) {
      let suma = parseInt(this.riesgos[i].frecuencia) + parseInt(this.riesgos[i].consecuencia);
      this.riesgos[i].magnitud = suma;
      // console.log(suma);
      if (this.riesgos[i].magnitud <= 4) {
        this.riesgos[i].magnitud ='IV';
      }else if(this.riesgos[i].magnitud === 5){
        this.riesgos[i].magnitud ='III'
      }else if(this.riesgos[i].magnitud === 6){
        this.riesgos[i].magnitud ='II'
      }else if(this.riesgos[i].magnitud >= 7){
        this.riesgos[i].magnitud ='I'
      }
    }

  }

  async pdf(){
    let pdf = new PdfMakeWrapper();
    pdf.header(
      await new Table([
        [
            new Columns([
            // await new Img ('../../../assets/icon/favicon.png').
            await new Img (`http://localhost:3000/logo/${this.datosEstacion.filename}`).
            height(55).
            width(40).
            alignment('center')
            .build(),
            new Txt(`${this.datosEstacion.nombre}`).alignment('center').fontSize(15).bold().end
          ]).end
        ],
          [new Cell(new Txt('I. POLÍTICA').alignment('center').end).end],
          [new Cell(new Txt('SISTEMA DE LA ADMINISTRACIÓN DE LA SEGURIDAD INDUSTRIAL SEGURIDAD OPERATIVA Y PROTECCIÓN DEL MEDIO AMBIENTE').fontSize(8).alignment('center').end).fillColor('#d7d8d6').end]
      ]).margin([20,0]).relativePosition(90,90).margin(-80 |-100).widths([800]).end
    );
    
    pdf.background(
      [
        await new Img(`http://localhost:3000/logo/${this.datosEstacion.filename}`).
        height(300).
        width(200).
        opacity(0.3).
        margin([300,200]).
        build()
      ]
    );

    
     
      pdf.rawContent(
        [
          new Table(
            [
              [
                new Cell(new Txt(`No.`).fontSize(10).end).fillColor('#abadds').end,
                new Cell(new Txt(`Actividades`).fontSize(10).end).fillColor('#abadds').end,
                new Cell(new Txt(`Riesgo asociado`).fontSize(10).end).fillColor('#abadds').end,
                new Cell(new Txt(`Causas`).fontSize(10).end).fillColor('#abadds').end,
                new Cell(new Txt(`Salvaguardas`).fontSize(10).end).fillColor('#abadds').end,
                new Cell(new Txt(`F`).fontSize(10).end).fillColor('#abadds').end,
                new Cell(new Txt(`C`).fontSize(10).end).fillColor('#abadds').end,
                new Cell(new Txt(`R`).fontSize(10).end).fillColor('#abadds').end,
                new Cell(new Txt(`Recomendación`).fontSize(10).end).fillColor('#abadds').end
              ]
            ]
          ).widths([20, 130, 130, 115, 140, 10, 10, 10, 115]).end
        ]
      )
  
    for (let i = 0; i < this.riesgos.length; i++) {
      
      pdf.add(
        new Table(
          [
            [
              new Cell(new Txt(`${i+1}`).fontSize(10).end).end,
              new Cell(new Txt(`${this.riesgos[i].actividad}`).alignment('justify').fontSize(10).end).end,
              new Cell(new Ul([
                new Txt(`a.${this.riesgos[i].peligros[0]}`).fontSize(10).alignment('justify').end,
                pdf.ln(1),
                new Txt(`${this.riesgos[i].peligros[1] === undefined  ? ' ': 'b.'+this.riesgos[i].peligros[1]}` ).fontSize(10).alignment('justify').end
              ]).type('none').end).end,
              new Cell(
                new Ul([
                  new Txt(`a.${this.riesgos[i].causas[0]}`).fontSize(10).alignment('justify').end,
                  pdf.ln(1),
                  new Txt(`b.${this.riesgos[i].causas[1]}`).fontSize(10).alignment('justify').end,
                  pdf.ln(1),
                  new Txt(`${this.riesgos[i].causas[2] === undefined  ? ' ': 'c.'+this.riesgos[i].causas[2]}`).fontSize(10).alignment('justify').end,
                  pdf.ln(1),
                  new Txt(`${this.riesgos[i].causas[3] === undefined  ? ' ': 'd.'+this.riesgos[i].causas[3]}`).fontSize(10).alignment('justify').end,
                  pdf.ln(1),
                  new Txt(`${this.riesgos[i].causas[4] === undefined  ? ' ': 'e.'+this.riesgos[i].causas[4]}`).fontSize(10).alignment('justify').end,
                  pdf.ln(1),
                  new Txt(`${this.riesgos[i].causas[5] === undefined  ? ' ': 'f.'+this.riesgos[i].causas[5]}`).fontSize(10).alignment('justify').end
                ]).type('none').end
              ).end,
              new Cell(
                new Ul([
                  new Txt(`${this.riesgos[i].salvaGuardas[0] === undefined  ? ' ': 'a.'+this.riesgos[i].salvaGuardas[0]}`).fontSize(10).alignment('justify').end,
                  new Txt(`${this.riesgos[i].salvaGuardas[1] === undefined  ? ' ': 'b.'+this.riesgos[i].salvaGuardas[1]}`).fontSize(10).alignment('justify').end,
                  new Txt(`${this.riesgos[i].salvaGuardas[2] === undefined  ? ' ': 'c.'+this.riesgos[i].salvaGuardas[2]}`).fontSize(10).alignment('justify').end,
                  new Txt(`${this.riesgos[i].salvaGuardas[3] === undefined  ? ' ': 'd.'+this.riesgos[i].salvaGuardas[3]}`).fontSize(10).alignment('justify').end,
                  new Txt(`${this.riesgos[i].salvaGuardas[4] === undefined  ? ' ': 'e.'+this.riesgos[i].salvaGuardas[4]}`).fontSize(10).alignment('justify').end
                ]).type('none').end
              ).end,
              new Cell(new Txt(`${this.riesgos[i].frecuencia}`).fontSize(10).alignment('justify').end).end,
              new Cell(new Txt(`${this.riesgos[i].consecuencia}`).fontSize(10).alignment('justify').end).end,
              new Cell(new Txt(`${this.riesgos[i].magnitud}`).fontSize(10).alignment('justify').end).end,
              new Cell(
                new Ul([
                  new Txt(`${this.riesgos[i].recomendaciones[0] === undefined  ? ' ': 'a.'+this.riesgos[i].recomendaciones[0]}`).fontSize(10).alignment('justify').end,
                  pdf.ln(1),
                  new Txt(`${this.riesgos[i].recomendaciones[1] === undefined  ? ' ': 'b.'+this.riesgos[i].recomendaciones[1]}`).fontSize(10).alignment('justify').end,
                  pdf.ln(1),
                  new Txt(`${this.riesgos[i].recomendaciones[2] === undefined  ? ' ': 'c.'+this.riesgos[i].recomendaciones[2]}`).fontSize(10).alignment('justify').end
                ]).type('none').end
              ).end
            ]
          ]
        ).widths([20, 130, 130, 115, 140, 10, 10, 10, 115]).end
      )
    }

    pdf.footer(
      await new Img (`../../../assets/images/footer.png`).
      height(100).
      width(820).
      margin([0,-35]).
      build(),
    )


    pdf.pageMargins([ 40, 150, 40, 60 ]);
    pdf.pageOrientation('landscape');
    pdf.create().open();
  }
}


