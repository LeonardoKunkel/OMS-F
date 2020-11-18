import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-e4-objetivos-metas',
  templateUrl: './e4-objetivos-metas.page.html',
  styleUrls: ['./e4-objetivos-metas.page.scss'],
})
export class E4ObjetivosMetasPage implements OnInit {
  numbCheck = null;
  @ViewChild('check') submitButton:ElementRef;
  state = false;

  data:any = [ {
    name: 'Reducción en generacion de residuos peligrosos',
    selected: false,
    value: 'Reducción en generacion de residuos peligrosos',
    img: '../../../assets/Imagenes/Elemento 4/reducción en generacion de residuos-01.png',
    met1: 'Reducción en la fuente, separación y valorización de los residuos',
    met2: 'Implementación del esquema “Producción más limpia”',
    meth3: 'Extremar medidas de seguridad en el almacenamiento de los productos peligrosos para evitar derrames o escapes',
    id: 'residuosPeligrosos'
  },
  {
    name: 'Reducción en el consumo de agua',
    selected: false,
    value: 'Reducción en el consumo de agua',
    img: '../../../assets/Imagenes/Elemento 4/reduccion de consumo de agua-01.png',
    met1: 'Reducir un 5% anual los residuos del vital liquido.',
    met2: 'Solventar las fugas.',
    meth3: 'Potencias sistema de limpieza en seco (barrer,aspirar).',
    id: 'consumoAgua'
  },
  {
    name: 'Reducción en el consumo de energia',
    selected: false,
    value: 'Reducción en el consumo de energia',
    img: '../../../assets/Imagenes/Elemento 4/reduccion de energia electrica-01-01.png',
    met1: 'Reducir un 5% anual los residuos del vital liquido.',
    met2: 'Solventar las fugas.',
    meth3: 'Potencias sistema de limpieza en seco (barrer,aspirar).',
    id: 'consumoEnergia'
  },
  {
    name: 'Cumplimiento al programa de mantenimiento',
    selected: false,
    value: 'Cumplimiento al programa de mantenimiento',
    img: '../../../assets/Imagenes/Elemento 4/cumplimiento programa de mantenimiento-01.png',
    met1: 'Reducir un 5% anual los residuos del vital liquido.',
    met2: 'Solventar las fugas.',
    meth3: 'Potencias sistema de limpieza en seco (barrer,aspirar).',
    id: 'programaMantenimiento'
  },
  {
    name: 'Incrementar capacitaciones a los trabajadores',
    selected: false,
    value: 'Incrementar capacitaciones a los trabajadores',
    img: '../../../assets/Imagenes/Elemento 4/incrementar capacitaciones-01 (1).png',
    met1: 'Reducir un 5% anual los residuos del vital liquido.',
    met2: 'Solventar las fugas.',
    meth3: 'Potencias sistema de limpieza en seco (barrer,aspirar).',
    id: 'capacitacionesTrabajadores'
  },
  {
    name: 'Incrementar venta 5% anualmente',
    selected: false,
    value: 'Incrementar venta 5% anualmente',
    img: '../../../assets/Imagenes/Elemento 4/incrementar venta 10-01.png',
    met1: 'Reducir un 5% anual los residuos del vital liquido.',
    met2: 'Solventar las fugas.',
    meth3: 'Potencias sistema de limpieza en seco (barrer,aspirar).',
    id: 'ventaAnualmente'
  },
  ];

  generacionResiduosPeligrosos: any = {
    objetivo: 'Reducción en la generación de residuos peligrosos',
    proceso: 'Acciones y medidas preventivas',
    meta1: 'Reducción en la fuente, separación y valorización de los residuos',
    meta2: 'Implementación del esquema “Producción más limpia”',
    meta3: 'Extremar medidas de seguridad en el almacenamiento de los productos peligrosos para evitar derrames o escapes',
    a1: `Evitar clasificar materiales como desecho o residuo en tanto no haya concluido su vida útil
        o sea efectivo dada la concentración establecida en el principio activo`,
    a2: `Involucrar a todos los miembros de la Estación de Servicio que tienen contacto con los
        residuos peligrosos para que colaboren en la minimización de residuos.`,
    a3: 'Adecuación de maquinaria y herramientas.Mantenimiento al cuarto de residuos peligrosos',
    i1: 'Reporte entregado por un tercero',
    i2: 'Reporte entregado por un tercero',
    i3: 'Reporte entregado por un tercero',
    S1: 'Bitácora de operación y mantenimiento',
    S2: 'Bitácora de operación y mantenimiento',
    S3: 'Bitácora de operación y mantenimiento',
    fE1: 'Trimestral',
    fE2: 'Trimestral',
    fE3: 'Trimestral',
    cA1: '5%',
    cA2: '5%',
    cA3: '5%',
  };

  reduccionConsumoAgua: any = {
    objetivo: 'Reducción en el consumo de agua',
    proceso: 'Acciones y medidas correctivas',
    meta1: 'Reducción del 10% anual de los residuos del vital líquido',
    meta2: 'Solventar las fugas',
    meta3: 'Potencias sistemas de limpieza en seco (barrer, aspirar, etc)',
    a1: 'Monitorizar y analizar el consumo de agua',
    a2: 'Asignar al personal de mantenimiento en la atención y arreglo de las fugas en tuberías, filtración o evaporación de agua',
    a3: 'Obtención del equipo necesario (escobas y aspiradoras) e involucrar al personal en estas tareas.',
    i1: 'Reducción en el recibo de agua',
    i2: 'Reducción en el recibo de agua',
    i3: 'Reducción en el recibo de agua',
    S1: 'Bitácora de operación y mantenimiento.',
    S2: 'Bitácora de operación y mantenimiento.',
    S3: 'Bitácora de operación y mantenimiento.',
    fE1: 'Semestral',
    fE2: 'Semestral',
    fE3: 'Semestral',
    cA1: '5%',
    cA2: '5%',
    cA3: '5%',
  };

  reduccionConsumoEnergia: any = {
    objetivo: 'Reducción en el consumo de energía eléctrica',
    proceso: 'Acciones y medidas correctivas',
    meta1: 'Reducción del 10% anual del consumo de energía',
    meta2: 'Aprovechar el punto máximo la luz natural',
    meta3: 'Usar bombillos ahorradores',
    a1: 'Monitorizar y analizar el consumo de energía eléctrica',
    a2: 'No encender bombillos durante periodos con luz natural',
    a3: 'Adquisición e instalación de bombillos de bajo consumo eléctrico.',
    i1: 'Reducción en el recibo de agua',
    i2: 'Reducción en el recibo de agua',
    i3: 'Reducción en el recibo de agua',
    S1: 'Bitácora de operación y mantenimiento',
    S2: 'Bitácora de operación y mantenimiento',
    S3: 'Bitácora de operación y mantenimiento',
    fE1: 'Semestral',
    fE2: 'Semestral',
    fE3: 'Semestral',
    cA1: '5%',
    cA2: '5%',
    cA3: '5%',
  };

  cumplimientoProgramaMantenimiento: any = {
    objetivo: 'Cumplimiento al programa de mantenimiento',
    proceso: 'Acciones y medidas correctivas',
    meta1: 'Reparación de equipo dañado',
    meta2: 'Planificación de mantenimiento preventivo periódicamente',
    meta3: 'Seguimiento puntual de la bitácora de operación y mantenimiento',
      a1: 'Cumplimiento del FS-20 Programa anual de mantenimiento',
      a2: 'Cumplimiento del FS-20 Programa anual de mantenimiento',
      a3: 'Cumplimiento del FS-20 Programa anual de mantenimiento',
      i1: 'Funcionamiento óptimo de la ES',
      i2: 'Reducción en el recibo de agua',
      i3: 'Reducción en el recibo de agua',
      S1: 'Bitácora de operación y mantenimiento',
      S2: 'Bitácora de operación y mantenimiento',
      S3: 'Bitácora de operación y mantenimiento',
      fE1: 'Semestral',
      fE2: 'Semestral',
      fE3: 'Semestral',
      cA1: '80%',
      cA2: '80%',
      cA3: '80%',
  };

  incrementarCapacitacionTrabajadores: any = {
    objetivo: 'Incrementar capacitación a los trabajadores',
    proceso: 'Acciones y medidas correctivas',
    meta1: 'Acciones y medidas correctivas',
    meta2: 'Cumplir con el programa anual de capacitación',
    meta3: 'Realizar la evaluación de resultados derivados de las capacitaciones',
    a1: 'Supervisar a los trabajadores y su desempeño analizando cómo pueden mejorar en el cumplimiento de sus actividades',
    a2: 'FS-17 Seguimiento del Programa anual de capacitación',
    a3: 'Verificar que los cursos hayan sido efectivos y evaluados',
    i1: 'Formato con necesidades detectadas',
    i2: 'Formato con programa de capacitación',
    i3: 'Certificados, diplomas, etc.',
    S1: 'FS-15 Detección de necesidades de capacitación',
    S2: 'Cumplimiento del formato',
    S3: 'Exámenes de evaluación firmados',
    fE1: 'Semestral',
    fE2: 'Semestral',
    fE3: 'Semestral',
    cA1: '50%',
    cA2: '50%',
    cA3: '50%'
  };

  incrementarVentas: any = {
    objetivo: 'Incrementar ventas 5%',
    proceso: 'Acciones y medidas correctivas',
    meta1: 'Establecimiento de metas de venta diarias',
    meta2: 'Capacitación al personal que esta en contacto con los clientes para mejor atención',
    meta3: 'Implementar estrategias de marketing',
      a1: 'Supervisar a los trabajadores y su desempeño analizando cómo pueden mejorar en el cumplimiento de sus actividades',
      a2: 'Platicas, cursos y concientización del personal ',
      a3: 'Patrocinar la Estación de Servicio a través de redes sociales y publicidad',
      i1: 'Reducción de quejas',
      i2: 'Cursos, diplomas, certificados, minutas',
      i3: 'Mayor reconocimiento de la Estación de Servicio',
      S1: 'FS-06 Quejas y sugerencias',
      S2: 'FS-06 Quejas y sugerencias',
      S3: 'Servicio de publicidad contratados',
      fE1: 'Anual',
      fE2: 'Anual',
      fE3: 'Anual',
      cA1: '5%',
      cA2: '5%',
      cA3: '5%',
  };

  constructor(
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  

  cambio(e){
    let checked = e.detail.checked;

    if(checked === true){
     this.numbCheck++;
    // console.log(this.numbCheck);
      if (this.numbCheck > 3) {
        this.state = true;
        this.presentAlertMultipleButtons();
      }
    }else{
      this.numbCheck--;
      console.log(this.numbCheck);
      if (this.numbCheck <= 3) {
        this.state = false;
      }
    }
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      header: 'Objetivos, Metas e Indicadores',
      message: 'Debes seleccionar 3 opciones solamente',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Ok');
            this.state = false;
            this.data[0].selected = false;
            this.data[1].selected = false;
            this.data[2].selected = false;
            this.data[3].selected = false;
            this.data[4].selected = false;
            this.data[5].selected = false;
          }
        }
      ]
    });

    await alert.present();
  }
  verify(){
    const uno = this.data[0].selected;
    const dos = this.data[1].selected;
    const tres = this.data[2].selected;
    const cuatro = this.data[3].selected;
    const cinco = this.data[4].selected;
    const seis = this.data[5].selected;

    if (uno === true && dos === true && tres === true) {
       alert('123')
      // this.maquetacion(this.generacionResiduosPeligrosos, this.reduccionConsumoAgua, this.reduccionConsumoEnergia);
    } else if (uno === true && dos === true && cuatro === true) {
       alert('124')
      //  this.maquetacion(this.generacionResiduosPeligrosos, this.reduccionConsumoAgua, this.cumplimientoProgramaMantenimiento);
    } else if (uno === true && dos === true && cinco === true) {
       alert('125')
      //  this.maquetacion(this.generacionResiduosPeligrosos, this.reduccionConsumoAgua, this.incrementarCapacitacionTrabajadores);
    } else if (uno === true && dos === true && seis === true) {
       alert('126')
      //  this.maquetacion(this.generacionResiduosPeligrosos, this.reduccionConsumoAgua, this.incrementarVentas);
    } else if (uno === true && tres === true && cuatro === true) {
       alert('134')
      //  this.maquetacion(this.generacionResiduosPeligrosos, this.reduccionConsumoEnergia, this.cumplimientoProgramaMantenimiento);
    } else if (uno === true && tres === true && cinco === true) {
       alert('135')
      //  this.maquetacion(this.generacionResiduosPeligrosos, this.reduccionConsumoEnergia, this.incrementarCapacitacionTrabajadores);
    } else if (uno === true && tres === true && seis === true) {
       alert('136')
      //  this.maquetacion(this.generacionResiduosPeligrosos, this.reduccionConsumoEnergia, this.incrementarVentas);
    } else if (uno === true && cuatro === true && cinco === true) {
      alert('145')
      // this.maquetacion(this.generacionResiduosPeligrosos, this.cumplimientoProgramaMantenimiento, this.incrementarCapacitacionTrabajadores);
    } else if (uno === true && cuatro === true && seis === true) {
       alert('146')
      //  this.maquetacion(this.generacionResiduosPeligrosos, this.cumplimientoProgramaMantenimiento, this.incrementarVentas);
    } else if (dos === true && tres === true && cuatro === true) {
       alert('234')
      //  this.maquetacion(this.reduccionConsumoAgua, this.reduccionConsumoEnergia, this.cumplimientoProgramaMantenimiento);
    } else if (dos === true && tres === true && cinco === true) {
       alert('235')
      //  this.maquetacion(this.reduccionConsumoAgua, this.reduccionConsumoEnergia, this.incrementarCapacitacionTrabajadores);
    } else if (dos === true && tres === true && seis === true) {
       alert('236')
      //  this.maquetacion(this.reduccionConsumoAgua, this.reduccionConsumoEnergia, this.incrementarVentas);
    } else if (dos === true && cuatro === true && cinco === true) {
      alert('245')
      //  this.maquetacion(this.reduccionConsumoAgua, this.cumplimientoProgramaMantenimiento, this.incrementarCapacitacionTrabajadores);
    } else if (dos === true && cuatro === true && seis === true) {
      alert('246')
      //  this.maquetacion(this.reduccionConsumoAgua, this.cumplimientoProgramaMantenimiento, this.incrementarVentas);
    } else if (dos === true && cinco === true && seis === true) {
      alert('256')
      //  this.maquetacion(this.reduccionConsumoAgua, this.incrementarCapacitacionTrabajadores, this.incrementarVentas);
    } else if (tres === true && cuatro === true && cinco === true) {
      alert('345')
      //  this.maquetacion(this.reduccionConsumoEnergia, this.cumplimientoProgramaMantenimiento, this.incrementarCapacitacionTrabajadores);
    } else if (tres === true && cuatro === true && seis === true) {
       alert('346')
      //  this.maquetacion(this.reduccionConsumoEnergia, this.cumplimientoProgramaMantenimiento, this.incrementarVentas);
    } else if (tres === true && cinco === true && seis === true) {
       alert('356')
      //  this.maquetacion(this.reduccionConsumoEnergia, this.incrementarCapacitacionTrabajadores, this.incrementarVentas);
    } else if (cuatro === true && cinco === true && seis === true) {
      alert('456')
      // this.maquetacion(this.cumplimientoProgramaMantenimiento, this.incrementarCapacitacionTrabajadores, this.incrementarVentas);
    }
  }
  

}
