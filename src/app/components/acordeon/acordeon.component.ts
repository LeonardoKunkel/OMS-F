import { E13SimulacroService } from './../../services/e13-simulacro.service';
import { EstacionService } from 'src/app/services/estacion.service';
import { PdfMakerService } from './../../services/pdf-maker.service';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.scss'],
})
export class AcordeonComponent implements OnInit {

  datos: any = {
    mes: '',
    aviso: '',
    fecha: '',
    descripcionEmergencia: '',
    claseSimulacro: '',
  };

  datos2: any = {
    mes: '',
    aviso: '',
    fecha: '',
    descripcionEmergencia: '',
    claseSimulacro: '',
  };

  datos3: any = {
    mes: '',
    aviso: '',
    fecha: '',
    descripcionEmergencia: '',
    claseSimulacro: '',
  };

  datos4: any = {
    mes: '',
    aviso: '',
    fecha: '',
    descripcionEmergencia: '',
    claseSimulacro: '',
  };

  datos5: any = {
    mes: '',
    aviso: '',
    fecha: '',
    descripcionEmergencia: '',
    claseSimulacro: '',
  };

  public disabled = false;
  public disabled2 = false;
  public disabled3 = false;
  public disabled4 = false;
  public disabled5 = false;

  constructor(
    private pdfMaker: PdfMakerService,
    private renderer: Renderer2,
    private estacionService: EstacionService,
    private simulacroService: E13SimulacroService
    
  ) { }

  ngOnInit() {}

  public change() {
    this.disabled = !this.disabled;
  }public change2() {
    this.disabled2 = !this.disabled2;
  }public change3() {
    this.disabled3 = !this.disabled3;
  }public change4() {
    this.disabled4 = !this.disabled4;
  }public change5() {
    this.disabled5 = !this.disabled5;
  }

}

// import { Simulacro5Service } from './../../services/Elemento 13/simulacro5.service';
// import { Simulacro4Service } from './../../services/Elemento 13/simulacro4.service';
// import { Simulacro3Service } from './../../services/Elemento 13/simulacro3.service';
// import { Simulacro2Service } from './../../services/Elemento 13/simulacro2.service';
// import { SimulacroService } from './../../services/Elemento 13/simulacro.service';
// import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
// import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
// import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
// import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
// import { Component, OnInit, ViewChild, Renderer } from '@angular/core';
// import { PdfMakerService } from '../../services/pdf-maker.service';
// import { AcordeonService } from '../../services/Elemento 13/acordeon.service';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-acordeon',
//   templateUrl: './acordeon.component.html',
//   styleUrls: ['./acordeon.component.scss'],
// })
// export class AcordeonComponent implements OnInit {

//   myImage = null;
//   firmaEstacion = null;
//   iconoEstacion = null;
//   marcaAguaEstacion = null;
//   firmaRepresentante = null;
//   datosEstacion: any = {
//     calleNumero: '',
//     ciudad: '',
//     colonia: '',
//     correoElectronico: '',
//     cp: '',
//     estado: '',
//     gerenteEstacion: '',
//     maximaAutoridad: '',
//     nombreEstacionServicio: '',
//     representanteTecnico: '',
//     telefono: ''
//   };

//   acordeonExpand = false;
//   acordeonExpand2 = false;
//   acordeonExpand3 = false;
//   acordeonExpand4 = false;
//   acordeonExpand5 = false;
//   @ViewChild('cc')  cardContent: any;
//   @ViewChild('sismo')  cardContent2: any;
//   @ViewChild('derrameDespacho')  cardContent3: any;
//   @ViewChild('incendiosElectricos')  cardContent4: any;
//   @ViewChild('derrameFuga')  cardContent5: any;
//   datos: any = {
//     mes: '',
//     aviso: '',
//     fecha: '',
//     descripcionEmergencia: '',
//     claseSimulacro: '',
//   };

//   datos2: any = {
//     mes: '',
//     aviso: '',
//     fecha: '',
//     descripcionEmergencia: '',
//     claseSimulacro: '',
//   };

//   datos3: any = {
//     mes: '',
//     aviso: '',
//     fecha: '',
//     descripcionEmergencia: '',
//     claseSimulacro: '',
//   };

//   datos4: any = {
//     mes: '',
//     aviso: '',
//     fecha: '',
//     descripcionEmergencia: '',
//     claseSimulacro: '',
//   };

//   datos5: any = {
//     mes: '',
//     aviso: '',
//     fecha: '',
//     descripcionEmergencia: '',
//     claseSimulacro: '',
//   };

//   public disabled = false;
//   public disabled2 = false;
//   public disabled3 = false;
//   public disabled4 = false;
//   public disabled5 = false;

//   constructor(
//     public renderer: Renderer,
//     private pdfMaker: PdfMakerService,
//     // private acordeonServicio: AcordeonService,
//     private datosEstacionService: EstacionServicioDatosService,
//     private marca: MarcaAguaServiceService,
//     private icono: IconoEstacionService,
//     private firma: FirmaEstacionServiceService,
    
//     private simulacroService: SimulacroService,
//     private simulacro2Service: Simulacro2Service,
//     private simulacro3Service: Simulacro3Service,
//     private simulacro4Service: Simulacro4Service,
//     private simulacro5Service: Simulacro5Service
//     ) {
//       this.change();
//       this.change2();
//       this.change3();
//       this.change4();
//       this.change5();
//       this.getSimulacro();
//       this.getSimulacro2();
//       this.getSimulacro3();
//       this.getSimulacro4();
//       this.getSimulacro5();
//       this.getFirma();
//       this.getIcono();
//       this.getDatosEstacion();
//   }

//   ngOnInit() {
//     console.log(this.cardContent.el);
//     this.marcaAgua();
//     this.imagen64();
//   }

//   public change() {
//     this.disabled = !this.disabled;
//   }public change2() {
//     this.disabled2 = !this.disabled2;
//   }public change3() {
//     this.disabled3 = !this.disabled3;
//   }public change4() {
//     this.disabled4 = !this.disabled4;
//   }public change5() {
//     this.disabled5 = !this.disabled5;
//   }

//   toggleAcordeon() {
//     if (this.acordeonExpand) {
//       this.renderer.setElementStyle(this.cardContent.el, 'max-height', '0px');
//     } else {
//       this.renderer.setElementStyle(this.cardContent.el, 'max-height', '800px');
//     }
//     this.acordeonExpand = !this.acordeonExpand;
//   }

//   toggleSismo() {
//     if (this.acordeonExpand2) {
//       this.renderer.setElementStyle(this.cardContent2.el, 'max-height', '0px');
//     } else {
//       this.renderer.setElementStyle(this.cardContent2.el, 'max-height', '800px');
//     }
//     this.acordeonExpand2 = !this.acordeonExpand2;
//   }

//   toggleDerrameDespacho() {
//     if (this.acordeonExpand3) {
//       this.renderer.setElementStyle(this.cardContent3.el, 'max-height', '0px');
//     } else {
//       this.renderer.setElementStyle(this.cardContent3.el, 'max-height', '800px');
//     }
//     this.acordeonExpand3 = !this.acordeonExpand3;
//   }

//   toggleIncendiosElectricos() {
//     if (this.acordeonExpand4) {
//       this.renderer.setElementStyle(this.cardContent4.el, 'max-height', '0px');
//     } else {
//       this.renderer.setElementStyle(this.cardContent4.el, 'max-height', '800px');
//     }
//     this.acordeonExpand4 = !this.acordeonExpand4;
//   }


//   toggleDerrameFuga() {
//     if (this.acordeonExpand5) {
//       this.renderer.setElementStyle(this.cardContent5.el, 'max-height', '0px');
//     } else {
//       this.renderer.setElementStyle(this.cardContent5.el, 'max-height', '800px');
//     }
//     this.acordeonExpand5 = !this.acordeonExpand5;
//   }

//   enviarForm(formulario) {
//     console.log(this.datos);
//     this.crear(this.datos);
//     this.change();
//   }

//   enviarForm2(formulario2) {
//     console.log(this.datos2);
//     this.crear2(this.datos2);
//     this.change2();
//   }

//   enviarForm3(formulario3) {
//     console.log(this.datos3);
//     this.crear3(this.datos3);
//     this.change3();
//   }

//   enviarForm4(formulario4) {
//     console.log(this.datos4);
//     this.crear4(this.datos4);
//     this.change4();
//   }

//   enviarForm5(formulario5) {
//     console.log(this.datos5);
//     this.crear5(this.datos5 );
//     this.change5();
//   }

//   getSimulacro() {
//     this.simulacroService.getSimulacro().subscribe((data: any) => {
//       console.log(data.findSimulacro[data.findSimulacro.length - 1]);
//       this.datos = data.findSimulacro[data.findSimulacro.length - 1];
//     });
//   }

//   crear(param) {
//     this.simulacroService.crearSimulacro(param).subscribe((data: any) => {
//       console.log(data);
//     });
//   }

//   getSimulacro2() {
//     this.simulacro2Service.getSimulacro2().subscribe((data: any) => {
//       console.log(data.findSimulacro2[data.findSimulacro2.length - 1]);
//       this.datos2 = data.findSimulacro2[data.findSimulacro2.length - 1];
//     });
//   }

//   crear2(param) {
//     this.simulacro2Service.crearSimulacro2(param).subscribe((data: any) => {
//       console.log(data);
//     });
//   }

//   getSimulacro3() {
//     this.simulacro3Service.getSimulacro3().subscribe((data: any) => {
//       console.log(data.findSimulacro3[data.findSimulacro3.length - 1]);
//       this.datos3 = data.findSimulacro3[data.findSimulacro3.length - 1];
//     });
//   }

//   crear3(param) {
//     this.simulacro3Service.crearSimulacro3(param).subscribe((data: any) => {
//       console.log(data);
//     });
//   }

//   getSimulacro4() {
//     this.simulacro4Service.getSimulacro4().subscribe((data: any) => {
//       console.log(data.findSimulacro4[data.findSimulacro4.length - 1]);
//       this.datos4 = data.findSimulacro4[data.findSimulacro4.length - 1];
//     });
//   }

//   crear4(param) {
//     this.simulacro4Service.crearSimulacro4(param).subscribe((data: any) => {
//       console.log(data);
//     });
//   }

//   getSimulacro5() {
//     this.simulacro5Service.getSimulacro5().subscribe((data: any) => {
//       console.log(data.findSimulacro5[data.findSimulacro5.length - 1]);
//       this.datos5 = data.findSimulacro5[data.findSimulacro5.length - 1];
//     });
//   }

//   crear5(param) {
//     this.simulacro5Service.crearSimulacro5(param).subscribe((data: any) => {
//       console.log(data);
//     });
//   }

//   getDatosEstacion() {
//     this.datosEstacionService.getEstacion().subscribe((data: any) => {
//       // console.log(data.findEstacion[data.findEstacion.length -1]);
//       this.datosEstacion = data.findEstacion[data.findEstacion.length - 1];
//     });
//   }
//   getIcono() {
//     this.icono.getPolitica().subscribe((data: any ) => {
//       console.log(data);
//       this.iconoEstacion =  data.findPolitica[data.findPolitica.length - 1].imagen;
//     });
//   }

//   getFirma() {
//     this.firma.getFirmaEstacion().subscribe((data: any) => {
//       // console.log(data);
//       this.firmaEstacion = this.firma = data.findFirma[data.findFirma.length - 1].firma;
//     });
//   }

//   marcaAgua() {
//     return this.marca.getMarcaAgua().subscribe((data: any) => {
//       // console.log(data.findMarcaAgua[data.findMarcaAgua.length - 1].marcaAgua);
//       this.marcaAguaEstacion = data.findMarcaAgua[data.findMarcaAgua.length - 1].marcaAgua;
//     });
//   }

//   imagen64() {
//     this.convertFileDataURLviaFileReader(`../../../assets/FondosEstilos/copyright_footer-07.png`).subscribe(
//       base64 => {
//         this.myImage = base64;
//       }
//     );
//   }

//   convertFileDataURLviaFileReader(url: string) {
//     return Observable.create(observer => {
//       const xhr: XMLHttpRequest = new XMLHttpRequest();
//       xhr.onload = function() {
//         const reader: FileReader = new FileReader();
//         reader.onloadend = function() {
//           observer.next(reader.result);
//           observer.complete();
//         };
//         reader.readAsDataURL(xhr.response);
//       };
//       xhr.open('GET', url);
//       xhr.responseType = 'blob';
//       xhr.send();
//     });
//   }

//   /////////////////// I N C E N D I O    E N   A R E A   D E   D E S P A C H O ///////////////////////

//   planeacioSimulacroIncendio() {
//     console.log(this.datos.estacionServicio);

//     const fecha = new Date();
//     const day = fecha.getDate();
//     const month = fecha.getUTCMonth() + 1;
//     const year = fecha.getFullYear();
//     // const marcaAgua = this.marcaAguaEstacion;
//     // const iconoEstacion = this.iconoEstacion;
//     // const firmaEstacion = this.firmaEstacion;
//     // const footer = this.myImage;
//     // const ddd = this.datosEstacion;
//     const dd = {
//       // background(currentPage, pageSize) {
//       //   return {
//       //     image: `${marcaAgua}`, width: 300, height: 420,
//       //     absolutePosition: {x: 160, y: 190}, opacity: 0.5
//       //   };
//       // },
//       header() {
//         return {
//           table: {
//             widths: [150, 400],
//             heights: [30, 10, 10],
//             body: [
//               [
//                 {
//                   // image: `${iconoEstacion}`,
//                   // width: 45,
//                   // height: 60,
//                   // alignment: 'left',
//                   // border: [true, true, false, true],
//                   // margin: [10, 0]
//                 },
//                 {
//                   text: `Nombre de la Estación`,
//                   bold: true,
//                   fontSize: 15,
//                   alignment: 'center',
//                   margin: [0, 15],
//                   border: [false, true, true, true],
//                 }
//               ],
//               [
//                 {
//                   text: 'XIII. PREPARACIÓN Y RESPUESTA DE EMERGENCIAS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                 },
//                 {}
//               ],
//               [
//                 {
//                   text: 'PLANEACIÓN DE SIMULACROS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                   fillColor: '#ddd',
//                 },
//               ]
//             ]
//           },
//           margin: [22, 15]
//         };
//       },
//       footer(currentPage, pageCount) {
//         return {
//           table: {
//             headerRows: 1,
//             widths: [510],
//             body : [
//               [
//                 {
//                   columns: [
//                     'Página' + currentPage.toString() + ' de ' + pageCount,
//                     {text: `P-SA-01 Rev.0, ${day}/${month}/${year}`, width: 180}
//                   ]
//                 }
//               ],
//               [
//                 {
//                   // image: `${footer}`,
//                   // pageBreak: 'after',
//                   // width: 510,
//                   // height: 60,
//                 },
//               ],
//               [''],
//             ]
//           },
//           layout: 'headerLineOnly',
//           margin: [50, 20],
//         };
//       },
//       content: [
//         {
//           table: {
//             widths: [30, 320, 192],
//             body: [
//               [
//                 {text: '1.  INFORMACIÓN GENERAL DEL SIMULACRO', bold: true, fillColor: '#ddd', colSpan: 3},
//                 {},
//                 {}
//               ],
//               [
//                 {text: 'OBJETIVOS DEL SIMULACRO DE EMERGENCIA', bold: true, colSpan: 3},
//                 {},
//                 {}
//               ],
//               [
//                 {text: 'No.', bold: true, alignment: 'center'},
//                 {text: '1', bold: true, alignment: 'center'},
//                 {text: 'RESPONSABLE DE LA ATENCIÓN', bold: true, alignment: 'center', fontSize: 10},
//               ],
//               [
//                 {text: '1', alignment: 'center'},
//                 {text: 'Aprender el procedimiento en caso de un incendio en el área de despacho', bold: true, alignment: 'center'},
//                 {text: 'Gerente de la Estación de Servicio', fontSize: 10}
//               ],
//               [
//                 {text: '2', alignment: 'center'},
//                 {text: 'Salvaguardar la vida de las personas en la ES', bold: true, alignment: 'center'},
//                 {text: 'Representante Técnico', fontSize: 10}
//               ]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [281, 271],
//             body: [
//               [
//                 {text: 'ÁREA: Despacho', bold: true},
//                 {text: `FECHA Y HORA PROGRAMADA: ${this.datos.fecha}`, bold: true}
//               ],
//               [
//                 {text: 'EQUIPO: Dispensario, mangueras y válvulas de corte', bold: true},
//                 {text: `CON AVISO PREVIO: ${this.datos.aviso}`, bold: true}
//               ],
//               [
//                 {text: `CLASE DE SIMULACRO: ${this.datos.claseSimulacro}`, bold: true},
//                 {text: 'AGENTE PERTURBADOR: Fuego', bold: true}
//               ],
//               [
//                 {
//                   colSpan: 2,
//                   text: [
//                     {text: 'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:\n', bold: true},
//                     `${this.datos.descripcionEmergencia}`
//                   ]
//                 }
//               ]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [180, 372],
//             body: [
//               [
//                 {text: '2.  EQUIPO DE PROTECCIÓN PERSONALO Y DISPOSITIVOS ', bold: true, fillColor: '#ddd', colSpan: 2},
//                 {}
//               ],
//               [
//                 {text: 'Traje de bomberos', alignment: 'center'},
//                 {text: 'Extintores PQS 9 kg', alignment: 'center'},
//               ],
//               [
//                 {text: 'Guantes', alignment: 'center'},
//                 {text: 'Válvulas de cierre y corte', alignment: 'center'},
//               ],
//               [
//                 {text: 'Ropa 100% algodón', alignment: 'center'},
//                 {text: 'Paro de emergencias', alignment: 'center'},
//               ],
//               [
//                 {text: 'Casco', alignment: 'center'},
//                 {text: 'Botiquín de emergencia', alignment: 'center'},
//               ],
//               [
//                 {text: 'Mascarilla', alignment: 'center'},
//                 {text: '', alignment: 'center'},
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [20, 140, 30, 65, 112, 70, 70],
//             body: [
//               [
//                 {text: '3.  SECUENCIA DE ACCIONES DEL SIMULACRO', bold: true, fillColor: '#ddd', colSpan: 7},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//               ],
//               [
//                 {text: 'ACTIVIDAD', bold: true, fillColor: '#ddd', colSpan: 4},
//                 {},
//                 {},
//                 {},
//                 {text: 'RESPONSABLE', bold: true, fillColor: '#ddd', alignment: 'center', rowSpan: 2},
//                 {text: 'RECURSOS\nMATERIALES\nREQUERIDOS', bold: true, fillColor: '#ddd', alignment: 'center', rowSpan: 2, fontSize: 8},
//                 {text: 'TIEMPO DE RESPUESTA', bold: true, fillColor: '#ddd', alignment: 'center', rowSpan: 2},
//               ],
//               [
//                 {text: 'No.', bold: true, fillColor: '#ddd', alignment: 'center'},
//                 {text: 'DESCRIPCIÓN', bold: true, fillColor: '#ddd', alignment: 'center'},
//                 {text: 'REAL', bold: true, fillColor: '#ddd', alignment: 'center'},
//                 {text: 'SIMULADA', bold: true, fillColor: '#ddd', alignment: 'center'},
//                 {},
//                 {},
//                 {},
//               ],
//               [
//                 {text: '1', alignment: 'center'},
//                 {text: 'Cliente arriba a la ES'},
//                 {text: 'X', alignment: 'center'},
//                 {},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//               ],
//               [
//                 {text: '2', alignment: 'center'},
//                 {text: 'Se dispone a ser atentado'},
//                 {text: 'X', alignment: 'center'},
//                 {},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//               ],
//               [
//                   {text: '3', alignment: 'center'},
//                   {text: 'El despachador surte producto'},
//                   {},
//                   {text: 'X', alignment: 'center'},
//                   {text: 'Despachador', alignment: 'center'},
//                   {text: 'Dispensario', alignment: 'center'},
//                   {text: 'N/A', alignment: 'center'},
//               ],
//               [
//                   {text: '4', alignment: 'center'},
//                   {text: 'Cliente adquiere energía estática al friccionar su ropa', fontSize: 9},
//                   {},
//                   {text: 'X', alignment: 'center'},
//                   {text: 'N/A', alignment: 'center'},
//                   {text: 'N/A', alignment: 'center'},
//                   {text: 'N/A', alignment: 'center'},
//               ],
//               [
//                   {text: '5', alignment: 'center'},
//                   {text: 'Chispa genera ignición', fontSize: 9},
//                   {},
//                   {text: 'X', alignment: 'center'},
//                   {text: 'N/A', alignment: 'center'},
//                   {text: 'N/A', alignment: 'center'},
//                   {text: 'N/A', alignment: 'center'},
//               ],
//               [
//                   {text: '6', alignment: 'center'},
//                   {text: 'La manguera dispensa producto con fuego', fontSize: 9},
//                   {},
//                   {text: 'X', alignment: 'center'},
//                   {text: 'N/A', alignment: 'center'},
//                   {text: 'N/A', alignment: 'center'},
//                   {text: 'N/A', alignment: 'center'},
//               ],
//               [
//                   {text: '7', alignment: 'center'},
//                   {text: 'Se acciona paro de emergencia'},
//                   {text: 'X', alignment: 'center'},
//                   {},
//                   {text: 'Despachador', alignment: 'center'},
//                   {text: 'Paro de emergencia', alignment: 'center'},
//                   {text: '10 segundos', alignment: 'center'},
//               ],
//               [
//                   {text: '8', alignment: 'center'},
//                   {text: 'Se interviene con los extintores'},
//                   {text: 'X', alignment: 'center'},
//                   {},
//                   {text: 'Despachador/ Gerente de ES/Personal de mantenimiento', alignment: 'center', fontSize: 9},
//                   {text: 'Extintores', alignment: 'center'},
//                   {text: '40 segundos', alignment: 'center'},
//               ],
//               [
//                   {text: '9', alignment: 'center'},
//                   {text: 'Se controla el fuego'},
//                   {text: 'X', alignment: 'center'},
//                   {},
//                   {},
//                   {},
//                   {text: '3 minutos', alignment: 'center'},
//               ],
//               [
//                   {text: '10', alignment: 'center'},
//                   {text: 'Se atiende personal herido'},
//                   {text: 'X', alignment: 'center'},
//                   {},
//                   {},
//                   {text: 'Botiquín', alignment: 'center'},
//                   {text: '3 minutos', alignment: 'center'},
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [20, 220, 303],
//             body: [
//               [
//                 {text: '4.  UBICACIÓN DE LOS RECURSOS EN EL SITIO', bold: true, fillColor: '#ddd', colSpan: 3},
//                 {},
//                 {},
//               ],
//               [
//                 {text: '1.', alignment: 'center'},
//                 {text: 'Extintores'},
//                 {text: 'Área de Despacho', alignment: 'center'}
//               ],
//               [
//                 {text: '2.', alignment: 'center'},
//                 {text: 'Paros de emergencia'},
//                 {text: 'Área de Despacho, columnas', alignment: 'center'}
//               ],
//               [
//                 {text: '3.', alignment: 'center'},
//                 {text: 'Válvulas de cierre'},
//                 {text: 'Dispensarios (parte inferior y en mangueras)', alignment: 'center'}
//               ],
//               [
//                 {text: '4.', alignment: 'center'},
//                 {text: 'Interruptores'},
//                 {text: 'Área de Despacho (paros de emergencia)', alignment: 'center'}
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [20, 220, 303],
//             body: [
//               [
//                 {text: '5.  OBSERVADORES', bold: true, fillColor: '#ddd', colSpan: 3},
//                 {},
//                 {},
//               ],
//               [
//                 {text: 'No.', alignment: 'center', bold: true},
//                 {text: 'NOMBRE', alignment: 'center', bold: true},
//                 {text: 'UBICACIÓN', alignment: 'center', bold: true}
//               ],
//               [
//                 {text: '1.', alignment: 'center'},
//                 {},
//                 {}
//               ],
//               [
//                 {text: '2.', alignment: 'center'},
//                 {},
//                 {}
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [276, 276],
//             body: [
//               [
//                 {text: '6. AUTORIZACIÓN', bold: true, fillColor: '#ddd', colSpan: 2},
//                 {}
//               ],
//               [
//                 {text: 'PROPONE:\n\nGamaliel Chavarría\nENCARGADO', alignment: 'center'},
//                 {text: 'APROBADO POR:\n\nSergio Lechuga\nREPRESENTANTE TÉCNICO', alignment: 'center'}
//               ]
//             ]
//           }
//         }
//       ],
//       pageSize: 'LETTER',
//       pageMargins: [22, 120]
//     };
//     this.pdfMaker.generate(dd, 'Planeacion de simulacros');

//   }

//   evaluacionSimulacroIncendio() {
//     const fecha = new Date();
//     const day = fecha.getDate();
//     const month = fecha.getUTCMonth() + 1;
//     const year = fecha.getFullYear();
//     // const marcaAgua = this.marcaAguaEstacion;
//     // const iconoEstacion = this.iconoEstacion;
//     // const firmaEstacion = this.firmaEstacion;
//     // const footer = this.myImage;
//     // const ddd = this.datosEstacion;
//     const dd = {
//       // background(currentPage, pageSize) {
//       //   return {
//       //     image: `${marcaAgua}`,
//       //     width: 290,
//       //     height: 400,
//       //     absolutePosition: {x: 170, y: 210},
//       //     opacity: 0.4
//       //   };
//       // },
//       header() {
//         return {
//           table: {
//             widths: [150, 400],
//             heights: [30, 10, 10],
//             body: [
//               [
//                 {
//                   // image: `${iconoEstacion}`,
//                   // width: 45,
//                   // height: 60,
//                   // alignment: 'left',
//                   // border: [true, true, false, true],
//                   // margin: [7, 0]
//                 },
//                 {
//                   text: `Nombre de la Estación`,
//                   bold: true,
//                   fontSize: 15,
//                   alignment: 'center',
//                   margin: [0, 15],
//                   border: [false, true, true, true],
//                 }
//               ],
//               [
//                 {
//                   text: 'XIII. PREPARACIÓN Y RESPUESTA DE EMERGENCIAS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                 },
//                 {}
//               ],
//               [
//                 {
//                   text: 'EVALUACIÓN DE SIMULACROS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                   fillColor: '#ddd',
//                 },
//               ]
//             ]
//           },
//           margin: [22, 15]
//         };
//       },
//       footer(currentPage, pageCount) {
//         return {
//           table: {
//             headerRows: 1,
//             widths: [510],
//             body : [
//               [
//                 {
//                   columns: [
//                     'Página' + currentPage.toString() + ' de ' + pageCount,
//                     {text: `P-SA-01 Rev.0, ${day}/${month}/${year}`, width: 180}
//                   ]
//                 }
//               ],
//               [
//                 {
//                   // image: `${footer}`,
//                   // pageBreak: 'after',
//                   // width: 510,
//                   // height: 60,
//                 },
//               ],
//               [''],
//             ]
//           },
//           layout: 'headerLineOnly',
//           margin: [50, 20],
//         };
//       },
//       content: [
//         {
//           table: {
//             widths: [559],
//             heights: [10],
//             body: [
//               [{text: '1. INFORMACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd'}],
//             ]
//           },
//         },
//         {
//           table: {
//             widths: [250, 300],
//             heights: [10, 10, 10, 10, 10, 10, 10],
//             body: [
//               [
//                 {text: `ÁREA: Despacho`, bold: true, fillColor: '#ddd'},
//                 {text: `FECHA Y HORA PROGRAMADA: ${this.datos.mes}`, bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: 'EQUIPO: Dispensario, mangueras y válvulas de corte', bold: true, fillColor: '#ddd'},
//                 {text: `CON AVISO PREVIO: ${this.datos.aviso}`, bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: `CLASE DE SIMULACRO: ${this.datos.claseSimulacro}`, bold: true, fillColor: '#ddd'},
//                 {text: 'AGENTE PERTURBADOR: Fuego', bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: 'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:', bold: true, fillColor: '#ddd', colSpan: 2}
//               ],
//               [
//                 {text: `${this.datos.descripcionEmergencia}`, colSpan: 2, rowSpan: 3}
//               ],
//               [
//                 {text: ''}
//               ],
//               [
//                 {text: ''}
//               ],
//             ],
//           },
//         },
//         {text: '\n\n'},
//         {
//           table: {
//             widths: [70, 200, 270],
//             heights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
//             body: [
//               [
//                 {text: 'EVALUACIÓN', bold: true, fillColor: '#ddd', colSpan: 3},
//                 {text: ''},
//                 {text: ''}
//               ],
//               [
//                 {text: 'OBJETIVO', bold: true, fillColor: '#ddd', aligment: 'center'},
//                 {text: 'CONCEPTOS EVALUADOS', bold: true, fillColor: '#ddd', aligment: 'center'},
//                 {text: 'ACIERTOS Y DEFICIENCIAS OBSERVADAS', bold: true, fillColor: '#ddd', aligment: 'center'}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [559], heights: [10, 70],
//             body: [
//               [
//                 {text: '3. OBSERVACIONES', bold: true, fillColor: '#ddd'}
//               ],
//               [{}]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [559],
//             heights: [10, 70],
//             body: [
//               [{text: '4. CONCLUSIONES', bold: true, fillColor: '#ddd'}],
//               [{}],
//             ],
//           },
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [186, 186, 180], heights: [10, 80],
//             body: [
//               [
//                 {text: '5. AUTORIZACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd', colSpan: 3}
//               ],
//               [
//                 {text: 'PROPONE:', aligment: 'center'},
//                 {text: 'APROBADO POR:', aligment: 'center'},
//                 {text: 'AUTORIZA:', aligment: 'center'}
//               ],
//             ],
//           },
//         },
//       ],
//       styles: {
//         header: {
//           fontSize: 18,
//           bold: true
//         },
//       },
//       pageSize: 'LETTER',
//       pageMargins: [22, 120]
//     };
//     this.pdfMaker.generate(dd, 'Evaluacion de simulacro');
//   }

//   ///////////////////   S I S M O   ////////////////////////////

//   planeacioSimulacroSismo() {
//     const fecha = new Date();
//     const day = fecha.getDate();
//     const month = fecha.getUTCMonth() + 1;
//     const year = fecha.getFullYear();
//     // const marcaAgua = this.marcaAguaEstacion;
//     // const iconoEstacion = this.iconoEstacion;
//     // const firmaEstacion = this.firmaEstacion;
//     // const footer = this.myImage;
//     // const ddd = this.datosEstacion;
//     const dd = {
//       // background(currentPage, pageSize) {
//       //   return {
//       //     image: `${marcaAgua}`, width: 300, height: 420,
//       //     absolutePosition: {x: 160, y: 190}, opacity: 0.5
//       //   };
//       // },
//       header() {
//         return {
//           table: {
//             widths: [150, 400],
//             heights: [30, 10, 10],
//             body: [
//               [
//                 {
//                   // image: `${iconoEstacion}`,
//                   // width: 45,
//                   // height: 60,
//                   // alignment: 'left',
//                   // border: [true, true, false, true],
//                   // margin: [7, 0]
//                 },
//                 {
//                   text: `Nombre de la Estación`,
//                   bold: true,
//                   fontSize: 15,
//                   alignment: 'center',
//                   margin: [0, 15],
//                   border: [false, true, true, true],
//                 }
//               ],
//               [
//                 {
//                   text: 'XIII. PREPARACIÓN Y RESPUESTA DE EMERGENCIAS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                 },
//                 {}
//               ],
//               [
//                 {
//                   text: 'PLANEACIÓN DE SIMULACROS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                   fillColor: '#ddd',
//                 },
//               ]
//             ]
//           },
//           margin: [22, 15]
//         };
//       },
//       footer(currentPage, pageCount) {
//         return {
//           table: {
//             headerRows: 1,
//             widths: [510],
//             body : [
//               [
//                 {
//                   columns: [
//                     'Página' + currentPage.toString() + ' de ' + pageCount,
//                     {text: `P-SA-01 Rev.0, ${day}/${month}/${year}`, width: 180}
//                   ]
//                 }
//               ],
//               [
//                 {
//                   // image: `${footer}`,
//                   // pageBreak: 'after',
//                   // width: 510,
//                   // height: 60,
//                 },
//               ],
//               [''],
//             ]
//           },
//           layout: 'headerLineOnly',
//           margin: [50, 20],
//         };
//       },
//       content: [
//         {
//           table: {
//             widths: [552],
//             heights: [10],
//             body: [
//               [{text: '1. INFORMACIÓN GENERAL DEL SIMULACRO', bold: true, fillColor: '#ddd'}],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [20, 257, 257],
//             heights: [10, 10, 10, 10],
//             body: [
//               [
//                 {text: 'OBJETIVOS DEL SIMULACRO DE EMERGENCIA', bold: true, colSpan: 3},
//                 {},
//                 {}
//               ],
//               [
//                 {text: 'No.'},
//                 {text: '2', bold: true, alignment: 'center'},
//                 {text: 'RESPONSABLE DE LA ATENCIÓN', bold: true, alignment: 'center'}
//               ],
//               [
//                 {text: '1'},
//                 {text: 'Aprender a controlar una situación de emergencia', bold: true, alignment: 'center'},
//                 {text: 'Gerente de la Estación '}
//               ],
//               [
//                 {text: '2'},
//                 {
//                   text: `Aprender el procedimiento a efectuar en caso de un sismo y salvaguardar la
//                         integridad de las personasy edificios de la ES`,
//                   bold: true,
//                   alignment: 'center'
//                 },
//                 {text: 'Representante Técnico'}
//               ]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [272, 272],
//             heights: [10, 10, 10, 50],
//             body: [
//               [
//                 {text: 'ÁREA: Toda la ES, principalmente dentro de los edificios', bold: true, fillColor: '#ddd'},
//                 {text: `FECHA Y HORA PROGRAMADA: ${this.datos2.fecha}`, bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: 'EQUIPO: N/A', bold: true, fillColor: '#ddd'},
//                 {text: `CON AVISO PREVIO: ${this.datos2.aviso}`, bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: `CLASE DE SIMULACRO: ${this.datos2.claseSimulacro}`, bold: true, fillColor: '#ddd'},
//                 {text: 'AGENTE PERTURBADOR: Vibraciones', bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {
//                   colSpan: 2,
//                   text: [
//                     {text: 'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:\n', bold: true},
//                     `${this.datos2.descripcionEmergencia}`
//                   ]
//                 }
//               ]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [200, 346],
//             heights: [10, 10, 10, 10, 10, 10],
//             body: [
//               [
//                 {
//                   text: '2. EQUIPO DE PROTECCIÓN PERSONAL Y DISPOSITIVOS DE SEGURIDAD REQUERIDOS:',
//                   bold: true,
//                   fillColor: '#ddd',
//                   colSpan: 2
//                 },
//                 {}
//               ],
//               [
//                 {text: 'Casco', alignment: 'center'},
//                 {text: 'Extintores PQS 9 kg', alignment: 'center'}
//               ],
//               [
//                 {text: 'Guantes', alignment: 'center'},
//                 {text: 'Válvulas de cierre y corte', alignment: 'center'}
//               ],
//               [
//                 {text: 'Máscaras de respiración', alignment: 'center'},
//                 {text: 'Paros de emergencia', alignment: 'center'}
//               ],
//               [
//                 {text: 'Botiquín de emergencia', alignment: 'center'},
//                 {}
//               ],
//               [
//                 {},
//                 {}
//               ]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [19, 160, 29, 60, 83, 80, 70],
//             heights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
//             body: [
//               [
//                 {text: '3. SECUENCIA DE ACCIONES DE SIMULACRO', bold: true, fillColor: '#ddd', colSpan: 7},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {text: 'ACTIVIDAD', bold: true, fillColor: '#ddd', colSpan: 4},
//                 {},
//                 {},
//                 {},
//                 {text: 'RESPONSABLE', bold: true, fillColor: '#ddd', rowSpan: 2},
//                 {text: 'RECURSOS MATERIALES REQUERIDOS', bold: true, fillColor: '#ddd', rowSpan: 2},
//                 {text: 'TIEMPO DE RESPUESTA', bold: true, fillColor: '#ddd', rowSpan: 2}
//               ],
//               [
//                 {text: 'No.', bold: true, fillColor: '#ddd'},
//                 {text: 'DESCRIPCIÓN', bold: true, fillColor: '#ddd'},
//                 {text: 'REAL', bold: true, fillColor: '#ddd'},
//                 {text: 'SIMULADA', bold: true, fillColor: '#ddd'},
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {text: '1'},
//                 {text: 'Inicio de evento'},
//                 {},
//                 {text: 'X', aligment: 'center'},
//                 {text: 'NA', alignment: 'center'},
//                 {text: 'NA', alignment: 'center'},
//                 {text: 'NA', alignment: 'center'}
//               ],
//               [
//                 {text: '2'},
//                 {text: 'Evaluación'},
//                 {text: 'X', alignment: 'center'},
//                 {},
//                 {text: 'Gerente de la ES', alignment: 'center'},
//                 {text: 'NA', alignment: 'center'},
//                 {text: '1 minuto', alignment: 'center'}
//               ],
//               [
//                 {text: '3'},
//                 {text: 'Salvamiento'},
//                 {},
//                 {text: 'X', alignment: 'center'},
//                 {text: 'Brigadistas', alignment: 'center'},
//                 {text: 'NA', alignment: 'center'},
//                 {text: '1 minuto', alignment: 'center'}
//               ],
//               [
//                 {text: '4'},
//                 {text: 'Asistencia sanitaria'},
//                 {},
//                 {text: 'X', alignment: 'center'},
//                 {text: 'Cuerpos de emergencia', alignment: 'center'},
//                 {text: 'Equipo propio', alignment: 'center'},
//                 {text: '10 minutos', alignment: 'center'}
//               ],
//               [
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {}
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [20, 120, 397],
//             heights: [10, 10, 10, 10, 10],
//             body: [
//               [
//                 {text: '4. UBICACIÓN DE LOS RECURSOS EN EL SITIO', bold: true, fillColor: '#ddd', colSpan: 3},
//                 {},
//                 {}
//               ],
//               [
//                 {text: '1.'},
//                 {text: 'Extintores'},
//                 {text: 'Área de DEspacho, oficinas, áreas de tanques y bombas', alignment: 'center'}
//               ],
//               [
//                 {text: '2.'},
//                 {text: 'Paros de emergencia'},
//                 {text: 'Área de despacho, oficinas', alignment: 'center'}
//               ],
//               [
//                 {text: '3.'},
//                 {text: 'Válvulas de cierre'},
//                 {text: 'Dispensarios y tanques', alignment: 'center'}
//               ],
//               [
//                 {text: '4.'},
//                 {text: 'Interruptores'},
//                 {text: 'Área de oficinas', alignment: 'center'}
//               ]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [20, 150, 367],
//             heights: [10, 10, 10, 10],
//             body: [
//               [
//                 {text: '5. OBSERVADORES', bold: true, fillColor: '#ddd', colSpan: 3},
//                 {},
//                 {}
//               ],
//               [
//                 {text: 'No.'},
//                 {text: 'NOMBRE', bold: true},
//                 {text: 'UBICACIÓN', bold: true}
//               ],
//               [
//                 {text: '1'},
//                 {},
//                 {}
//               ],
//               [
//                 {text: '2'},
//                 {},
//                 {}
//               ]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [275, 275],
//             heights: [10, 50],
//             body: [
//               [
//                 {text: '6. AUTORIZACIÓN', bold: true, fillColor: '#ddd', colSpan: 2},
//                 {}
//               ],
//               [
//                 {text: 'PROPONE:\n\nCinthya Karime Bedoy Díaz\nENCARGADO'},
//                 {text: 'APROBADO POR:\n\nRoberto Muñoz Torres\nREPRESENTANTE TÉCNICO'}
//               ]
//             ]
//           }
//         }
//       ],
//       styles: {
//         header: {
//           fontSize: 18,
//           bold: true,
//         },
//       },
//       pageSize: 'LETTER',
//       pageMargins: [22, 120],
//     };
//     this.pdfMaker.generate(dd, 'Planeacion de simulacros');
//   }

//   evaluacionSimulacroSismo() {
//     const fecha = new Date();
//     const day = fecha.getDate();
//     const month = fecha.getUTCMonth() + 1;
//     const year = fecha.getFullYear();
//     // const marcaAgua = this.marcaAguaEstacion;
//     // const iconoEstacion = this.iconoEstacion;
//     // const firmaEstacion = this.firmaEstacion;
//     // const footer = this.myImage;
//     // const ddd = this.datosEstacion;
//     const dd = {
//       // background(currentPage, pageSize) {
//       //   return {
//       //     image: `${marcaAgua}`,
//       //     width: 290,
//       //     height: 400,
//       //     absolutePosition: {x: 170, y: 210},
//       //     opacity: 0.4
//       //   };
//       // },
//       header() {
//         return {
//           table: {
//             widths: [150, 400],
//             heights: [30, 10, 10],
//             body: [
//               [
//                 {
//                   // image: `${iconoEstacion}`,
//                   // width: 45,
//                   // height: 60,
//                   // alignment: 'left',
//                   // border: [true, true, false, true],
//                   // margin: [7, 0]
//                 },
//                 {
//                   text: `Nombre de la Estación`,
//                   bold: true,
//                   fontSize: 15,
//                   alignment: 'center',
//                   margin: [0, 15],
//                   border: [false, true, true, true],
//                 }
//               ],
//               [
//                 {
//                   text: 'XIII. PREPARACIÓN Y RESPUESTA DE EMERGENCIAS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                 },
//                 {}
//               ],
//               [
//                 {
//                   text: 'EVALUACIÓN DE SIMULACROS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                   fillColor: '#ddd',
//                 },
//               ]
//             ]
//           },
//           margin: [22, 15]
//         };
//       },
//       footer(currentPage, pageCount) {
//         return {
//           table: {
//             headerRows: 1,
//             widths: [510],
//             body : [
//               [
//                 {
//                   columns: [
//                     'Página' + currentPage.toString() + ' de ' + pageCount,
//                     {text: `P-SA-01 Rev.0, ${day}/${month}/${year}`, width: 180}
//                   ]
//                 }
//               ],
//               [
//                 {
//                   // image: `${footer}`,
//                   // pageBreak: 'after',
//                   // width: 510,
//                   // height: 60,
//                 },
//               ],
//               [''],
//             ]
//           },
//           layout: 'headerLineOnly',
//           margin: [50, 20],
//         };
//       },
//       content: [
//         {
//           table: {
//             widths: [559],
//             heights: [10],
//             body: [
//               [{text: '1. INFORMACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd'}],
//             ]
//           },
//         },
//         {
//           table: {
//             widths: [250, 300],
//             heights: [10, 10, 10, 10, 10, 10, 10],
//             body: [
//               [
//                 {text: `ÁREA: Despacho`, bold: true, fillColor: '#ddd'},
//                 {text: `FECHA Y HORA PROGRAMADA: ${this.datos2.mes}`, bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: 'EQUIPO: Dispensario, mangueras y válvulas de corte', bold: true, fillColor: '#ddd'},
//                 {text: `CON AVISO PREVIO: ${this.datos2.aviso}`, bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: `CLASE DE SIMULACRO: ${this.datos2.claseSimulacro}`, bold: true, fillColor: '#ddd'},
//                 {text: 'AGENTE PERTURBADOR: Vibraciones', bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: 'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:', bold: true, fillColor: '#ddd', colSpan: 2}
//               ],
//               [
//                 {text: `${this.datos2.descripcionEmergencia}`, colSpan: 2, rowSpan: 3}
//               ],
//               [
//                 {text: ''}
//               ],
//               [
//                 {text: ''}
//               ],
//             ],
//           },
//         },
//         {text: '\n\n'},
//         {
//           table: {
//             widths: [70, 200, 270],
//             heights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
//             body: [
//               [
//                 {text: 'EVALUACIÓN', bold: true, fillColor: '#ddd', colSpan: 3},
//                 {text: ''},
//                 {text: ''}
//               ],
//               [
//                 {text: 'OBJETIVO', bold: true, fillColor: '#ddd', aligment: 'center'},
//                 {text: 'CONCEPTOS EVALUADOS', bold: true, fillColor: '#ddd', aligment: 'center'},
//                 {text: 'ACIERTOS Y DEFICIENCIAS OBSERVADAS', bold: true, fillColor: '#ddd', aligment: 'center'}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [559], heights: [10, 70],
//             body: [
//               [
//                 {text: '3. OBSERVACIONES', bold: true, fillColor: '#ddd'}
//               ],
//               [{}]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [559],
//             heights: [10, 70],
//             body: [
//               [{text: '4. CONCLUSIONES', bold: true, fillColor: '#ddd'}],
//               [{}],
//             ],
//           },
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [186, 186, 180], heights: [10, 80],
//             body: [
//               [
//                 {text: '5. AUTORIZACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd', colSpan: 3}
//               ],
//               [
//                 {text: 'PROPONE:', aligment: 'center'},
//                 {text: 'APROBADO POR:', aligment: 'center'},
//                 {text: 'AUTORIZA:', aligment: 'center'}
//               ],
//             ],
//           },
//         },
//       ],
//       styles: {
//         header: {
//           fontSize: 18,
//           bold: true
//         },
//       },
//       pageSize: 'LETTER',
//       pageMargins: [22, 120]
//     };
//     this.pdfMaker.generate(dd, 'Evaluacion de simulacro');
//   }


//   //////// D E R R A M E   D E   P R O D U C T O   E N   D E S P A C H O ////////////////////////////////

//   planeacioSimulacroDerrameProducto() {
//     const fecha = new Date();
//     const day = fecha.getDate();
//     const month = fecha.getUTCMonth() + 1;
//     const year = fecha.getFullYear();
//     // const marcaAgua = this.marcaAguaEstacion;
//     // const iconoEstacion = this.iconoEstacion;
//     // const firmaEstacion = this.firmaEstacion;
//     // const footer = this.myImage;
//     // const ddd = this.datosEstacion;
//     const  dd = {
//       // background(currentPage, pageSize) {
//       //   return {
//       //     image: `${marcaAgua}`, width: 300, height: 420,
//       //     absolutePosition: {x: 160, y: 190}, opacity: 0.5
//       //   };
//       // },
//       header() {
//         return {
//           table: {
//             widths: [150, 400],
//             heights: [30, 10, 10],
//             body: [
//               [
//                 {
//                   // image: `${iconoEstacion}`,
//                   // width: 45,
//                   // height: 60,
//                   // alignment: 'left',
//                   // border: [true, true, false, true],
//                   // margin: [10, 0]
//                 },
//                 {
//                   text: `Nombre de la Estación`,
//                   bold: true,
//                   fontSize: 15,
//                   alignment: 'center',
//                   margin: [0, 15],
//                   border: [false, true, true, true],
//                 }
//               ],
//               [
//                 {
//                   text: 'XIII. PREPARACIÓN Y RESPUESTA DE EMERGENCIAS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                 },
//                 {}
//               ],
//               [
//                 {
//                   text: 'PLANEACIÓN DE SIMULACROS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                   fillColor: '#ddd',
//                 },
//               ]
//             ]
//           },
//           margin: [22, 15]
//         };
//       },
//       footer(currentPage, pageCount) {
//         return {
//           table: {
//             headerRows: 1,
//             widths: [510],
//             body : [
//               [
//                 {
//                   columns: [
//                     'Página' + currentPage.toString() + ' de ' + pageCount,
//                     {text: `P-SA-01 Rev.0, ${day}/${month}/${year}`, width: 180}
//                   ]
//                 }
//               ],
//               [
//                 {
//                   // image: `${footer}`,
//                   // pageBreak: 'after',
//                   // width: 510,
//                   // height: 60,
//                 },
//               ],
//               [''],
//             ]
//           },
//           layout: 'headerLineOnly',
//           margin: [50, 20],
//         };
//       },
//       content: [
//         {
//           table: {
//             widths: [30, 320, 192],
//             body: [
//               [
//                 {text: '1.  INFORMACIÓN GENERAL DEL SIMULACRO', bold: true, fillColor: '#ddd', colSpan: 3},
//                 {},
//                 {}
//               ],
//               [
//                 {text: 'OBJETIVOS DEL SIMULACRO DE EMERGENCIA', bold: true, colSpan: 3},
//                 {},
//                 {}
//               ],
//               [
//                 {text: 'No.', bold: true, alignment: 'center'},
//                 {text: '3', bold: true, alignment: 'center'},
//                 {text: 'RESPONSABLE DE LA ATENCIÓN', bold: true, alignment: 'center', fontSize: 10},
//               ],
//               [
//                 {text: '1', alignment: 'center'},
//                 {text: 'Aprender a controlar los riesgos de un derrame de producto', bold: true, alignment: 'center'},
//                 {text: 'Gerente de la Estación de Servicio', fontSize: 10}
//               ],
//               [
//                 {text: '2', alignment: 'center'},
//                 {text: 'Salvaguardar la integridad física de las persona en la ES', bold: true, alignment: 'center'},
//                 {text: 'Representante Técnico', fontSize: 10}
//               ]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [281, 271],
//             body: [
//               [
//                 {text: 'ÁREA: Despacho', bold: true},
//                 {text: `FECHA Y HORA PROGRAMADA: ${this.datos3.fecha}`, bold: true}
//               ],
//               [
//                 {text: 'EQUIPO: Dispensarios, mangueras y válvulas de corte', bold: true},
//                 {text: `CON AVISO PREVIO: ${this.datos3.aviso}`, bold: true}
//               ],
//               [
//                 {text: `CLASE DE SIMULACRO: ${this.datos3.claseSimulacro}`, bold: true},
//                 {text: 'AGENTE PERTURBADOR: Gasolina', bold: true}
//               ],
//               [
//                 {
//                   colSpan: 2,
//                   text: [
//                     {text: 'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:\n', bold: true},
//                     `${this.datos3.descripcionEmergencia}`
//                   ]
//                 }
//               ]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [180, 372],
//             heights: [10, 10, 10, 10, 10],
//             body: [
//               [
//                 {text: '2.  EQUIPO DE PROTECCIÓN PERSONALO Y DISPOSITIVOS ', bold: true, fillColor: '#ddd', colSpan: 2},
//                 {}
//               ],
//               [
//                 {text: 'Guantes', alignment: 'center'},
//                 {text: 'Válvulas de cierre y corte', alignment: 'center'},
//               ],
//               [
//                 {text: 'Ropa 100% algodón', alignment: 'center'},
//                 {text: 'Paro de emergencia', alignment: 'center'},
//               ],
//               [
//                 {},
//                 {},
//               ],
//               [
//                 {},
//                 {},
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [20, 140, 30, 65, 112, 70, 70],
//             body: [
//               [
//                 {text: '3.  SECUENCIA DE ACCIONES DEL SIMULACRO', bold: true, fillColor: '#ddd', colSpan: 7},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//               ],
//               [
//                 {text: 'ACTIVIDAD', bold: true, fillColor: '#ddd', colSpan: 4},
//                 {},
//                 {},
//                 {},
//                 {text: 'RESPONSABLE', bold: true, fillColor: '#ddd', alignment: 'center', rowSpan: 2},
//                 {text: 'RECURSOS\nMATERIALES\nREQUERIDOS', bold: true, fillColor: '#ddd', alignment: 'center', rowSpan: 2, fontSize: 8},
//                 {text: 'TIEMPO DE RESPUESTA', bold: true, fillColor: '#ddd', alignment: 'center', rowSpan: 2},
//               ],
//               [
//                 {text: 'No.', bold: true, fillColor: '#ddd', alignment: 'center'},
//                 {text: 'DESCRIPCIÓN', bold: true, fillColor: '#ddd', alignment: 'center'},
//                 {text: 'REAL', bold: true, fillColor: '#ddd', alignment: 'center'},
//                 {text: 'SIMULADA', bold: true, fillColor: '#ddd', alignment: 'center'},
//                 {},
//                 {},
//                 {},
//               ],
//               [
//                 {text: '1', alignment: 'center'},
//                 {text: 'Cliente arriba a la ES'},
//                 {text: 'X', alignment: 'center'},
//                 {},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//               ],
//               [
//                 {text: '2', alignment: 'center'},
//                 {text: 'Se dispone a ser atentado'},
//                 {text: 'X', alignment: 'center'},
//                 {},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//               ],
//               [
//                 {text: '3', alignment: 'center'},
//                 {text: 'El despachador surte producto'},
//                 {},
//                 {text: 'X', alignment: 'center'},
//                 {text: 'Despachador', alignment: 'center'},
//                 {text: 'Dispensario', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//               ],
//               [
//                 {text: '4', alignment: 'center'},
//                 {text: 'La manguera es retirada antes de terminar el proceso de surtido'},
//                 {},
//                 {text: 'X', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//               ],
//               [
//                 {text: '5', alignment: 'center'},
//                 {text: 'Fallo en las válvulas de cierre'},
//                 {},
//                 {text: 'X', alignment: 'center'},
//                 {text: 'Personal de mantenimiento', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//               ],
//               [
//                 {text: '6', alignment: 'center'},
//                 {text: 'Grandes cantidades de producto caen al suelo'},
//                 {},
//                 {text: 'X', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//               ],
//               [
//                 {text: '7', alignment: 'center'},
//                 {text: 'Se acciona paro de emergencia'},
//                 {text: 'X', alignment: 'center'},
//                 {},
//                 {text: 'Despachador', alignment: 'center'},
//                 {text: 'Paro de emergencia', alignment: 'center'},
//                 {text: '10 segundos', alignment: 'center'},
//               ],
//               [
//                 {text: '8', alignment: 'center'},
//                 {text: 'El producto es lavado y llevado a la trampa'},
//                 {},
//                 {text: 'X', alignment: 'center'},
//                 {text: 'Despachador/Gerente/Personal de Mant.', alignment: 'center'},
//                 {text: 'Paro de emergencia', alignment: 'center'},
//                 {text: '10 segundos', alignment: 'center'},
//               ]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [20, 220, 303],
//             body: [
//               [
//                 {text: '4.  UBICACIÓN DE LOS RECURSOS EN EL SITIO', bold: true, fillColor: '#ddd', colSpan: 3},
//                 {},
//                 {},
//               ],
//               [
//                 {text: '1.', alignment: 'center'},
//                 {text: 'Extintores'},
//                 {text: 'Área de despacho', alignment: 'center'}
//               ],
//               [
//                 {text: '2.', alignment: 'center'},
//                 {text: 'Paros de emergencia'},
//                 {text: 'Área de Despacho, oficinas, área de tanques', alignment: 'center'}
//               ],
//               [
//                 {text: '3.', alignment: 'center'},
//                 {text: 'Válvulas de cierre'},
//                 {text: 'Dispensarios(parte inferior y en mangueras)', alignment: 'center'}
//               ],
//               [
//                 {text: '4.', alignment: 'center'},
//                 {text: 'Interruptores'},
//                 {text: 'Área de Oficinas', alignment: 'center'}
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [20, 220, 303],
//             body: [
//               [
//                 {text: '5.  OBSERVADORES', bold: true, fillColor: '#ddd', colSpan: 3},
//                 {},
//                 {},
//               ],
//               [
//                 {text: 'No.', alignment: 'center', bold: true},
//                 {text: 'NOMBRE', alignment: 'center', bold: true},
//                 {text: 'UBICACIÓN', alignment: 'center', bold: true}
//               ],
//               [
//                 {text: '1.', alignment: 'center'},
//                 {},
//                 {}
//               ],
//               [
//                 {text: '2.', alignment: 'center'},
//                 {},
//                 {}
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [276, 276],
//             body: [
//               [
//                 {text: '6. AUTORIZACIÓN', bold: true, fillColor: '#ddd', colSpan: 2},
//                 {}
//               ],
//               [
//                 {text: 'PROPONE:\n\nGamaliel Chavarría\nENCARGADO', alignment: 'center'},
//                 {text: 'APROBADO POR:\n\nSergio Lechuga\nREPRESENTANTE TÉCNICO', alignment: 'center'}
//               ]
//             ]
//           }
//         }
//       ],
//       pageSize: 'LETTER',
//       pageMargins: [22, 120]
//     };
//     this.pdfMaker.generate(dd, 'Planeacion de simulacros');
//   }

//   evaluacionSimulacroDerrameProducto() {
//     const fecha = new Date();
//     const day = fecha.getDate();
//     const month = fecha.getUTCMonth() + 1;
//     const year = fecha.getFullYear();
//     // const marcaAgua = this.marcaAguaEstacion;
//     // const iconoEstacion = this.iconoEstacion;
//     // const firmaEstacion = this.firmaEstacion;
//     // const footer = this.myImage;
//     // const ddd = this.datosEstacion;
//     const dd = {
//       // background(currentPage, pageSize) {
//       //   return {
//       //     image: `${marcaAgua}`,
//       //     width: 290,
//       //     height: 400,
//       //     absolutePosition: {x: 170, y: 210},
//       //     opacity: 0.4
//       //   };
//       // },
//       header() {
//         return {
//           table: {
//             widths: [150, 400],
//             heights: [30, 10, 10],
//             body: [
//               [
//                 {
//                   // image: `${iconoEstacion}`,
//                   // width: 45,
//                   // height: 60,
//                   // alignment: 'left',
//                   // border: [true, true, false, true],
//                   // margin: [10, 0]
//                 },
//                 {
//                   text: `Nombre de la Estación`,
//                   bold: true,
//                   fontSize: 15,
//                   alignment: 'center',
//                   margin: [0, 15],
//                   border: [false, true, true, true],
//                 }
//               ],
//               [
//                 {
//                   text: 'XIII. PREPARACIÓN Y RESPUESTA DE EMERGENCIAS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                 },
//                 {}
//               ],
//               [
//                 {
//                   text: 'EVALUACIÓN DE SIMULACROS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                   fillColor: '#ddd',
//                 },
//               ]
//             ]
//           },
//           margin: [22, 15]
//         };
//       },
//       footer(currentPage, pageCount) {
//         return {
//           table: {
//             headerRows: 1,
//             widths: [510],
//             body : [
//               [
//                 {
//                   columns: [
//                     'Página' + currentPage.toString() + ' de ' + pageCount,
//                     {text: `P-SA-01 Rev.0, ${day}/${month}/${year}`, width: 180}
//                   ]
//                 }
//               ],
//               [
//                 {
//                   // image: `${footer}`,
//                   // pageBreak: 'after',
//                   // width: 510,
//                   // height: 60,
//                 },
//               ],
//               [''],
//             ]
//           },
//           layout: 'headerLineOnly',
//           margin: [50, 20],
//         };
//       },
//       content: [
//         {
//           table: {
//             widths: [559],
//             heights: [10],
//             body: [
//               [{text: '1. INFORMACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd'}],
//             ]
//           },
//         },
//         {
//           table: {
//             widths: [250, 300],
//             heights: [10, 10, 10, 10, 10, 10, 10],
//             body: [
//               [
//                 {text: `ÁREA: Despacho`, bold: true, fillColor: '#ddd'},
//                 {text: `FECHA Y HORA PROGRAMADA: ${this.datos3.fecha}`, bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: 'EQUIPO: Dispensario, mangueras y válvulas de corte', bold: true, fillColor: '#ddd'},
//                 {text: `CON AVISO PREVIO: ${this.datos3.aviso}`, bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: `CLASE DE SIMULACRO: ${this.datos3.claseSimulacro}`, bold: true, fillColor: '#ddd'},
//                 {text: 'AGENTE PERTURBADOR: Fuego', bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: 'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:', bold: true, fillColor: '#ddd', colSpan: 2}
//               ],
//               [
//                 {text: `${this.datos3.descripcionEmergencia}`, colSpan: 2, rowSpan: 3}
//               ],
//               [
//                 {}
//               ],
//               [
//                 {}
//               ],
//             ],
//           },
//         },
//         {text: '\n\n'},
//         {
//           table: {
//             widths: [70, 200, 270],
//             heights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
//             body: [
//               [
//                 {text: 'EVALUACIÓN', bold: true, fillColor: '#ddd', colSpan: 3},
//                 {text: ''},
//                 {text: ''}
//               ],
//               [
//                 {text: 'OBJETIVO', bold: true, fillColor: '#ddd', aligment: 'center'},
//                 {text: 'CONCEPTOS EVALUADOS', bold: true, fillColor: '#ddd', aligment: 'center'},
//                 {text: 'ACIERTOS Y DEFICIENCIAS OBSERVADAS', bold: true, fillColor: '#ddd', aligment: 'center'}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [559], heights: [10, 70],
//             body: [
//               [
//                 {text: '3. OBSERVACIONES', bold: true, fillColor: '#ddd'}
//               ],
//               [{}]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [559],
//             heights: [10, 70],
//             body: [
//               [{text: '4. CONCLUSIONES', bold: true, fillColor: '#ddd'}],
//               [{}],
//             ],
//           },
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [186, 186, 180], heights: [10, 80],
//             body: [
//               [
//                 {text: '5. AUTORIZACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd', colSpan: 3}
//               ],
//               [
//                 {text: 'PROPONE:', aligment: 'center'},
//                 {text: 'APROBADO POR:', aligment: 'center'},
//                 {text: 'AUTORIZA:', aligment: 'center'}
//               ],
//             ],
//           },
//         },
//       ],
//       styles: {
//         header: {
//           fontSize: 18,
//           bold: true
//         },
//       },
//       pageSize: 'LETTER',
//       pageMargins: [22, 120]
//     };
//     this.pdfMaker.generate(dd, 'Evaluación de simulacros');
//   }

//   ////////// I N C E D I O  E N  I N S T A L A C I O N E S  E L É C T R I C A S ///////////////////////

//   planeacioSimulacroIncendioElectricos() {
//     const fecha = new Date();
//     const day = fecha.getDate();
//     const month = fecha.getUTCMonth() + 1;
//     const year = fecha.getFullYear();
//     // const marcaAgua = this.marcaAguaEstacion;
//     // const iconoEstacion = this.iconoEstacion;
//     // const firmaEstacion = this.firmaEstacion;
//     // const footer = this.myImage;
//     // const ddd = this.datosEstacion;
//     const dd = {
//       // background(currentPage, pageSize) {
//       //   return {
//       //     image: `${marcaAgua}`, width: 300, height: 420,
//       //     absolutePosition: {x: 160, y: 190}, opacity: 0.5
//       //   };
//       // },
//       header() {
//         return {
//           table: {
//             widths: [150, 400],
//             heights: [30, 10, 10],
//             body: [
//               [
//                 {
//                   // image: `${iconoEstacion}`,
//                   // width: 45,
//                   // height: 60,
//                   // alignment: 'left',
//                   // border: [true, true, false, true],
//                   // margin: [7, 0]
//                 },
//                 {
//                   text: `Nombre de la Estación`,
//                   bold: true,
//                   fontSize: 15,
//                   alignment: 'center',
//                   margin: [0, 15],
//                   border: [false, true, true, true],
//                 }
//               ],
//               [
//                 {
//                   text: 'XIII. PREPARACIÓN Y RESPUESTA DE EMERGENCIAS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                 },
//                 {}
//               ],
//               [
//                 {
//                   text: 'PLANEACIÓN DE SIMULACROS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                   fillColor: '#ddd',
//                 },
//               ]
//             ]
//           },
//           margin: [22, 15]
//         };
//       },
//       footer(currentPage, pageCount) {
//         return {
//           table: {
//             headerRows: 1,
//             widths: [510],
//             body : [
//               [
//                 {
//                   columns: [
//                     'Página' + currentPage.toString() + ' de ' + pageCount,
//                     {text: `P-SA-01 Rev.0, ${day}/${month}/${year}`, width: 180}
//                   ]
//                 }
//               ],
//               [
//                 {
//                   // image: `${footer}`,
//                   // pageBreak: 'after',
//                   // width: 510,
//                   // height: 60,
//                 },
//               ],
//               [''],
//             ]
//           },
//           layout: 'headerLineOnly',
//           margin: [50, 20],
//         };
//       },
//       content: [
//         {text: '\n'},
//         {
//           table: {
//             widths: [30, 320, 192],
//             body: [
//               [
//                 {text: '1.  INFORMACIÓN GENERAL DEL SIMULACRO', bold: true, fillColor: '#a5c3dd', colSpan: 3, fontSize: 10},
//                 {},
//                 {}
//               ],
//               [
//                 {text: 'OBJETIVOS DEL SIMULACRO DE EMERGENCIA', bold: true, colSpan: 3},
//                 {},
//                 {}
//               ],
//               [
//                 {text: 'No.', bold: true, alignment: 'center'},
//                 {text: '4', bold: true, alignment: 'center'},
//                 {text: 'RESPONSABLE DE LA ATENCIÓN', bold: true, alignment: 'center'},
//               ],
//               [
//                 {text: '1', alignment: 'center'},
//                 {
//                   text: 'Aprender el procedimiento a llevar a cabo en caso de un incendio en instalaciones eléctricas',
//                   bold: true,
//                   alignment: 'center',
//                   fontSize: 9
//                 },
//                 {text: 'Gerente de la Estación de Servicio', fontSize: 9, alignment: 'center'}
//               ],
//               [
//                 {text: '2', alignment: 'center'},
//                 {
//                   text: 'Salvaguardar la integridad física de las personas y los edificios en la ES',
//                   bold: true,
//                   alignment: 'center',
//                   fontSize: 9
//                 },
//                 {text: 'Representante Técnico', fontSize: 9, alignment: 'center'}
//               ]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [281, 271],
//             body: [
//               [
//                 {text: 'ÁREA: Oficinas y Cuarto de máquinas', bold: true},
//                 {text: `FECHA Y HORA PROGRAMADA: ${this.datos4.fecha}`, bold: true}
//               ],
//               [
//                 {text: 'EQUIPO: Interruptores, cableado, fuentes de electricidad', bold: true},
//                 {text: `CON AVISO PREVIO: ${this.datos4.aviso}`, bold: true}
//               ],
//               [
//                 {text: `CLASE DE SIMULACRO: De campo ${this.datos4.claseSimulacro}`, bold: true},
//                 {text: 'AGENTE PERTURBADOR: ', bold: true}
//               ],
//               [
//                 {
//                   colSpan: 2,
//                   text: [
//                     {text: 'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:\n', bold: true},
//                     `${this.datos4.descripcionEmergencia}`
//                   ]
//                 }
//               ]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [180, 372],
//             body: [
//               [
//                 {text: '2.  EQUIPO DE PROTECCIÓN PERSONALO Y DISPOSITIVOS ', bold: true, fillColor: '#a5c3dd', colSpan: 2},
//                 {}
//               ],
//               [
//                 {text: 'Guantes', alignment: 'center'},
//                 {text: 'Extintores PQS 9 kg', alignment: 'center'},
//               ],
//               [
//                 {text: 'Ropa 100% algodón', alignment: 'center'},
//                 {text: 'Paro de emergencias', alignment: 'center'},
//               ],
//               [
//                 {text: 'Traje de bombero', alignment: 'center'},
//                 {text: 'Botiquín de emergencia', alignment: 'center'},
//               ],
//               [
//                 {text: 'Casco', alignment: 'center'},
//                 {text: '', alignment: 'center'},
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [20, 140, 30, 65, 112, 70, 70],
//             body: [
//               [
//                 {text: '3.  SECUENCIA DE ACCIONES DEL SIMULACRO', bold: true, fillColor: '#a5c3dd', colSpan: 7},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//               ],
//               [
//                 {text: 'ACTIVIDAD', bold: true, fillColor: '#a5c3dd', colSpan: 4},
//                 {},
//                 {},
//                 {},
//                 {text: 'RESPONSABLE', bold: true, fillColor: '#a5c3dd', alignment: 'center', rowSpan: 2},
//                 {text: 'RECURSOS\nMATERIALES\nREQUERIDOS', bold: true, fillColor: '#a5c3dd', alignment: 'center', rowSpan: 2, fontSize: 8},
//                 {text: 'TIEMPO DE RESPUESTA', bold: true, fillColor: '#a5c3dd', alignment: 'center', rowSpan: 2},
//               ],
//               [
//                 {text: 'No.', bold: true, fillColor: '#a5c3dd', alignment: 'center'},
//                 {text: 'DESCRIPCIÓN', bold: true, fillColor: '#a5c3dd', alignment: 'center'},
//                 {text: 'REAL', bold: true, fillColor: '#a5c3dd', alignment: 'center'},
//                 {text: 'SIMULADA', bold: true, fillColor: '#a5c3dd', alignment: 'center'},
//                 {},
//                 {},
//                 {},
//               ],
//               [
//                 {text: '1', alignment: 'center'},
//                 {text: 'Existe un incendio en el cuarto de máquinas'},
//                 {},
//                 {text: 'X', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//               ],
//               [
//                 {text: '2', alignment: 'center'},
//                 {text: 'Se acciona paro de emergencia'},
//                 {text: 'X', alignment: 'center'},
//                 {},
//                 {text: 'Cualquier persona disponible', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: '10 segundos', alignment: 'center'},
//               ],
//               [
//                 {text: '3', alignment: 'center'},
//                 {text: 'Se preparan los extintores con CO2'},
//                 {text: 'X', alignment: 'center'},
//                 {},
//                 {text: 'Cualquier persona disponible', alignment: 'center'},
//                 {text: 'Extintores', alignment: 'center'},
//                 {text: '25 segundos', alignment: 'center'},
//               ],
//               [
//                 {text: '4', alignment: 'center'},
//                 {text: 'Se combate el incendio'},
//                 {},
//                 {text: 'X', alignment: 'center'},
//                 {text: 'Personal capacitado en la ES', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'El que sea necesario', alignment: 'center'},
//               ],
//               [
//                 {text: '5', alignment: 'center'},
//                 {text: 'Se solicita apoyo externo'},
//                 {},
//                 {text: 'X', alignment: 'center'},
//                 {text: 'Gerente de la ES', alignment: 'center'},
//                 {text: 'Teléfono', alignment: 'center'},
//                 {text: '10 minutos', alignment: 'center'},
//               ],
//               [
//                 {text: '6', alignment: 'center'},
//                 {text: 'Se controla la emergencia'},
//                 {},
//                 {text: 'X', alignment: 'center'},
//                 {text: 'Brigadistas', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'El que sea necesario', alignment: 'center'},
//               ],
//               [
//                 {text: '7', alignment: 'center'},
//                 {text: 'Se atiende al personal'},
//                 {},
//                 {text: 'X', alignment: 'center'},
//                 {text: 'Despachador', alignment: 'center'},
//                 {text: 'Paro de emergencia', alignment: 'center'},
//                 {text: 'el que sea necesario', alignment: 'center'},
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [20, 220, 303],
//             body: [
//               [
//                 {text: '4.  UBICACIÓN DE LOS RECURSOS EN EL SITIO', bold: true, fillColor: '#a5c3dd', colSpan: 3},
//                 {},
//                 {},
//               ],
//               [
//                 {text: '1.', alignment: 'center'},
//                 {text: 'Extintores'},
//                 {text: 'Oficinas', alignment: 'center'}
//               ],
//               [
//                 {text: '2.', alignment: 'center'},
//                 {text: 'Paros de emergencia'},
//                 {text: 'Área de Despacho, oficinas, área de tanques', alignment: 'center'}
//               ],
//               [
//                 {text: '3.', alignment: 'center'},
//                 {text: 'Válvulas de cierre'},
//                 {text: 'Dispensarios', alignment: 'center'}
//               ],
//               [
//                 {text: '4.', alignment: 'center'},
//                 {text: 'Interruptores'},
//                 {text: 'Área de Oficinas', alignment: 'center'}
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [20, 220, 303],
//             body: [
//               [
//                 {text: '5.  OBSERVADORES', bold: true, fillColor: '#a5c3dd', colSpan: 3},
//                 {},
//                 {},
//               ],
//               [
//                 {text: 'No.', alignment: 'center', bold: true},
//                 {text: 'NOMBRE', alignment: 'center', bold: true},
//                 {text: 'UBICACIÓN', alignment: 'center', bold: true}
//               ],
//               [
//                 {text: '1.', alignment: 'center'},
//                 {},
//                 {}
//               ],
//               [
//                 {text: '2.', alignment: 'center'},
//                 {},
//                 {}
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [276, 276],
//             body: [
//               [
//                 {text: '6. AUTORIZACIÓN', bold: true, fillColor: '#a5c3dd', colSpan: 2},
//                 {}
//               ],
//               [
//                 {text: 'PROPONE:\n\nGamaliel Chavarría\nENCARGADO', alignment: 'center'},
//                 {text: 'APROBADO POR:\n\nSergio Lechuga\nREPRESENTANTE TÉCNICO', alignment: 'center'}
//               ]
//             ]
//           }
//         }
//       ],
//       pageSize: 'LETTER',
//       pageMargins: [22, 120]
//     };
//     this.pdfMaker.generate(dd, 'Planeación de Simulacro');
//   }

//   evaluacionSimulacroIncendioElectricos() {
//     const fecha = new Date();
//     const day = fecha.getDate();
//     const month = fecha.getUTCMonth() + 1;
//     const year = fecha.getFullYear();
//     // const marcaAgua = this.marcaAguaEstacion;
//     // const iconoEstacion = this.iconoEstacion;
//     // const firmaEstacion = this.firmaEstacion;
//     // const footer = this.myImage;
//     // const ddd = this.datosEstacion;
//     const dd = {
//       // background(currentPage, pageSize) {
//       //   return {
//       //     image: `${marcaAgua}`,
//       //     width: 290,
//       //     height: 400,
//       //     absolutePosition: {x: 170, y: 210},
//       //     opacity: 0.4
//       //   };
//       // },
//       header() {
//         return {
//           table: {
//             widths: [150, 400],
//             heights: [30, 10, 10],
//             body: [
//               [
//                 {
//                   // image: `${iconoEstacion}`,
//                   // width: 45,
//                   // height: 60,
//                   // alignment: 'left',
//                   // border: [true, true, false, true],
//                   // margin: [7, 0]
//                 },
//                 {
//                   text: `Nombre de la Estación`,
//                   bold: true,
//                   fontSize: 15,
//                   alignment: 'center',
//                   margin: [0, 15],
//                   border: [false, true, true, true],
//                 }
//               ],
//               [
//                 {
//                   text: 'XIII. PREPARACIÓN Y RESPUESTA DE EMERGENCIAS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                 },
//                 {}
//               ],
//               [
//                 {
//                   text: 'EVALUACIÓN DE SIMULACROS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                   fillColor: '#ddd',
//                 },
//               ]
//             ]
//           },
//           margin: [22, 15]
//         };
//       },
//       footer(currentPage, pageCount) {
//         return {
//           table: {
//             headerRows: 1,
//             widths: [510],
//             body : [
//               [
//                 {
//                   columns: [
//                     'Página' + currentPage.toString() + ' de ' + pageCount,
//                     {text: `P-SA-01 Rev.0, ${day}/${month}/${year}`, width: 180}
//                   ]
//                 }
//               ],
//               [
//                 {
//                   // image: `${footer}`,
//                   // pageBreak: 'after',
//                   // width: 510,
//                   // height: 60,
//                 },
//               ],
//               [''],
//             ]
//           },
//           layout: 'headerLineOnly',
//           margin: [50, 20],
//         };
//       },
//       content: [
//         {
//           table: {
//             widths: [559],
//             heights: [10],
//             body: [
//               [{text: '1. INFORMACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd'}],
//             ]
//           },
//         },
//         {
//           table: {
//             widths: [250, 300],
//             heights: [10, 10, 10, 10, 10, 10, 10],
//             body: [
//               [
//                 {text: `ÁREA: Despacho`, bold: true, fillColor: '#ddd'},
//                 {text: `FECHA Y HORA PROGRAMADA: ${this.datos4.fecha}`, bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: 'EQUIPO: Dispensario, mangueras y válvulas de corte', bold: true, fillColor: '#ddd'},
//                 {text: `CON AVISO PREVIO: ${this.datos4.aviso}`, bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: `CLASE DE SIMULACRO: ${this.datos4.claseSimulacro}`, bold: true, fillColor: '#ddd'},
//                 {text: 'AGENTE PERTURBADOR: Gasolina', bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: 'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:', bold: true, fillColor: '#ddd', colSpan: 2}
//               ],
//               [
//                 {text: `${this.datos4.descripcionEmergencia}`, colSpan: 2, rowSpan: 3}
//               ],
//               [
//                 {text: ''}
//               ],
//               [
//                 {text: ''}
//               ],
//             ],
//           },
//         },
//         {text: '\n\n'},
//         {
//           table: {
//             widths: [70, 200, 270],
//             heights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
//             body: [
//               [
//                 {text: 'EVALUACIÓN', bold: true, fillColor: '#ddd', colSpan: 3},
//                 {text: ''},
//                 {text: ''}
//               ],
//               [
//                 {text: 'OBJETIVO', bold: true, fillColor: '#ddd', aligment: 'center'},
//                 {text: 'CONCEPTOS EVALUADOS', bold: true, fillColor: '#ddd', aligment: 'center'},
//                 {text: 'ACIERTOS Y DEFICIENCIAS OBSERVADAS', bold: true, fillColor: '#ddd', aligment: 'center'}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [559], heights: [10, 70],
//             body: [
//               [
//                 {text: '3. OBSERVACIONES', bold: true, fillColor: '#ddd'}
//               ],
//               [{}]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [559],
//             heights: [10, 70],
//             body: [
//               [{text: '4. CONCLUSIONES', bold: true, fillColor: '#ddd'}],
//               [{}],
//             ],
//           },
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [186, 186, 180], heights: [10, 80],
//             body: [
//               [
//                 {text: '5. AUTORIZACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd', colSpan: 3}
//               ],
//               [
//                 {text: 'PROPONE:', aligment: 'center'},
//                 {text: 'APROBADO POR:', aligment: 'center'},
//                 {text: 'AUTORIZA:', aligment: 'center'}
//               ],
//             ],
//           },
//         },
//       ],
//       styles: {
//         header: {
//           fontSize: 18,
//           bold: true
//         },
//       },
//       pageSize: 'LETTER',
//       pageMargins: [22, 120]
//     };
//     this.pdfMaker.generate(dd, 'Evaluacion de simulacro');
//   }
//   ////////////////////////// D E R R A M E    O    F U G A //////////////////////

//   planeacioSimulacroDerrame() {
//     const fecha = new Date();
//     const day = fecha.getDate();
//     const month = fecha.getUTCMonth() + 1;
//     const year = fecha.getFullYear();
//     // const marcaAgua = this.marcaAguaEstacion;
//     // const iconoEstacion = this.iconoEstacion;
//     // const firmaEstacion = this.firmaEstacion;
//     // const footer = this.myImage;
//     // const ddd = this.datosEstacion;
//     const dd = {
//       // background(currentPage, pageSize) {
//       //   return {
//       //     image: `${marcaAgua}`, width: 300, height: 420,
//       //     absolutePosition: {x: 160, y: 190}, opacity: 0.5
//       //   };
//       // },
//       header() {
//         return {
//           table: {
//             widths: [150, 400],
//             heights: [30, 10, 10],
//             body: [
//               [
//                 {
//                   // image: `${iconoEstacion}`,
//                   // width: 45,
//                   // height: 60,
//                   // alignment: 'left',
//                   // border: [true, true, false, true],
//                   // margin: [7, 0]
//                 },
//                 {
//                   text: `Nombre de la Estación`,
//                   bold: true,
//                   fontSize: 15,
//                   alignment: 'center',
//                   margin: [0, 15],
//                   border: [false, true, true, true],
//                 }
//               ],
//               [
//                 {
//                   text: 'XIII. PREPARACIÓN Y RESPUESTA DE EMERGENCIAS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                 },
//                 {}
//               ],
//               [
//                 {
//                   text: 'PLANEACIÓN DE SIMULACROS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                   fillColor: '#ddd',
//                 },
//               ]
//             ]
//           },
//           margin: [22, 15]
//         };
//       },
//       footer(currentPage, pageCount) {
//         return {
//           table: {
//             headerRows: 1,
//             widths: [510],
//             body : [
//               [
//                 {
//                   columns: [
//                     'Página' + currentPage.toString() + ' de ' + pageCount,
//                     {text: `P-SA-01 Rev.0, ${day}/${month}/${year}`, width: 180}
//                   ]
//                 }
//               ],
//               [
//                 {
//                   // image: `${footer}`,
//                   // pageBreak: 'after',
//                   // width: 510,
//                   // height: 60,
//                 },
//               ],
//               [''],
//             ]
//           },
//           layout: 'headerLineOnly',
//           margin: [50, 20],
//         };
//       },
//       content: [
//         {
//           table: {
//             widths: [30, 320, 192],
//             body: [
//               [
//                 {text: '1.  INFORMACIÓN GENERAL DEL SIMULACRO', bold: true, fillColor: '#a5c3dd', colSpan: 3},
//                 {},
//                 {}
//               ],
//               [
//                 {text: 'OBJETIVOS DEL SIMULACRO DE EMERGENCIA', bold: true, colSpan: 3},
//                 {},
//                 {}
//               ],
//               [
//                 {text: 'No.', bold: true, alignment: 'center'},
//                 {text: '5', bold: true, alignment: 'center'},
//                 {text: 'RESPONSABLE DE LA ATENCIÓN', bold: true, alignment: 'center', fontSize: 10},
//               ],
//               [
//                 {text: '1', alignment: 'center'},
//                 {
//                   text: 'Aprender a atender la emergencia frente a un derrame ocasionado por el descuido de un contratista',
//                   bold: true,
//                   alignment: 'center'
//                 },
//                 {text: 'Gerente de la Estación de Servicio', fontSize: 10}
//               ],
//               [
//                 {text: '2', alignment: 'center'},
//                 {text: 'Salvaguardar la integridad de las personas y edificios de la ES', bold: true, alignment: 'center'},
//                 {text: 'Chofer de autotanque', fontSize: 10}
//               ]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [281, 271],
//             body: [
//               [
//                 {
//                   text: [
//                     {text: 'ÁREA: ', bold: true},
//                     `Almacenamiento(Tanques)`
//                   ]
//                 },
//                 {text: `FECHA Y HORA PROGRAMADA: ${this.datos5.fecha}`, bold: true}
//               ],
//               [
//                 {
//                   text: [
//                     {text: 'EQUIPO: ', bold: true},
//                     `Válvula de sobre llenado, autotanque`
//                   ]
//                 },
//                 {
//                   text: [
//                     {text: 'CON AVISO PREVIO : ', bold: true},
//                     `${this.datos5.aviso}`
//                   ]
//                 },
//               ],
//               [
//                 {
//                   text: [
//                     {text: 'CLASE DE SIMULACRO: ', bold: true},
//                     `${this.datos5.claseSimulacro}`
//                   ]
//                 },
//                 {
//                   text: [
//                     {text: 'AGENTE PERTUBADOR: ', bold: true},
//                     `Combustible`
//                   ]
//                 },
//               ],
//               [
//                 {
//                   colSpan: 2,
//                   text: [
//                     {text: 'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:\n', bold: true},
//                     `${this.datos5.descripcionEmergencia}`
//                   ]
//                 }
//               ]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [180, 372],
//             body: [
//               [
//                 {text: '2.  EQUIPO DE PROTECCIÓN PERSONALO Y DISPOSITIVOS ', bold: true, fillColor: '#ddd', colSpan: 2},
//                 {}
//               ],
//               [
//                 {text: 'Casco', alignment: 'center'},
//                 {text: 'Extintores PQS 9 kg', alignment: 'center'},
//               ],
//               [
//                 {text: 'Guantes', alignment: 'center'},
//                 {text: 'Válvulas de cierre y corte', alignment: 'center'},
//               ],
//               [
//                 {text: 'Máscaras de respiración', alignment: 'center'},
//                 {text: 'Paro de emergencia', alignment: 'center'},
//               ],
//               [
//                 {text: '', alignment: 'center'},
//                 {text: 'Botiquín de emergencia', alignment: 'center'},
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [20, 140, 30, 65, 112, 70, 70],
//             body: [
//               [
//                 {text: '3.  SECUENCIA DE ACCIONES DEL SIMULACRO', bold: true, fillColor: '#a5c3dd', colSpan: 7},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//                 {},
//               ],
//               [
//                 {text: 'ACTIVIDAD', bold: true, fillColor: '#a5c3dd', colSpan: 4},
//                 {},
//                 {},
//                 {},
//                 {text: 'RESPONSABLE', bold: true, fillColor: '#a5c3dd', alignment: 'center', rowSpan: 2},
//                 {
//                   text: 'RECURSOS\nMATERIALES\nREQUERIDOS',
//                   bold: true,
//                   fillColor: '#a5c3dd',
//                   alignment: 'center',
//                   rowSpan: 2,
//                   fontSize: 8
//                 },
//                 {text: 'TIEMPO DE RESPUESTA', bold: true, fillColor: '#a5c3dd', alignment: 'center', rowSpan: 2},
//               ],
//               [
//                 {text: 'No.', bold: true, fillColor: '#a5c3dd', alignment: 'center'},
//                 {text: 'DESCRIPCIÓN', bold: true, fillColor: '#a5c3dd', alignment: 'center'},
//                 {text: 'REAL', bold: true, fillColor: '#a5c3dd', alignment: 'center'},
//                 {text: 'SIMULADA', bold: true, fillColor: '#a5c3dd', alignment: 'center'},
//                 {},
//                 {},
//                 {},
//               ],
//               [
//                 {text: '1', alignment: 'center'},
//                 {text: 'Inicio del evento'},
//                 {},
//                 {text: 'X', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//               ],
//               [
//                 {text: '2', alignment: 'center'},
//                 {text: 'Evacuación'},
//                 {text: 'X', alignment: 'center'},
//                 {},
//                 {text: 'Gerente de la ES', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: '1 minuto', alignment: 'center'},
//               ],
//               [
//                 {text: '3', alignment: 'center'},
//                 {text: 'Salvamiento'},
//                 {},
//                 {text: 'X', alignment: 'center'},
//                 {text: 'Brigadistas', alignment: 'center'},
//                 {text: 'N/A', alignment: 'center'},
//                 {text: '1 minuto', alignment: 'center'},
//               ],
//               [
//                 {text: '4', alignment: 'center'},
//                 {text: 'Asistencia sanitaria'},
//                 {},
//                 {text: 'X', alignment: 'center'},
//                 {text: 'Cuerpos de emergencia', alignment: 'center'},
//                 {text: 'Equipo propio', alignment: 'center'},
//                 {text: '10 minutos', alignment: 'center'},
//               ]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [20, 220, 303],
//             body: [
//               [
//                 {text: '4.  UBICACIÓN DE LOS RECURSOS EN EL SITIO', bold: true, fillColor: '#a5c3dd', colSpan: 3},
//                 {},
//                 {},
//               ],
//               [
//                 {text: '1.', alignment: 'center'},
//                 {text: 'Extintores'},
//                 {text: 'Área de despacho, oficinas, área de tanques y bombas', alignment: 'center'}
//               ],
//               [
//                 {text: '2.', alignment: 'center'},
//                 {text: 'Paros de emergencia'},
//                 {text: 'Área de Despacho, oficinas', alignment: 'center'}
//               ],
//               [
//                 {text: '3.', alignment: 'center'},
//                 {text: 'Válvulas de cierre'},
//                 {text: 'Dispensarios y tanques', alignment: 'center'}
//               ],
//               [
//                 {text: '4.', alignment: 'center'},
//                 {text: 'Interruptores'},
//                 {text: 'Área de Oficinas', alignment: 'center'}
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [20, 220, 303],
//             body: [
//               [
//                 {text: '5.  OBSERVADORES', bold: true, fillColor: '#a5c3dd', colSpan: 3},
//                 {},
//                 {},
//               ],
//               [
//                 {text: 'No.', alignment: 'center', bold: true},
//                 {text: 'NOMBRE', alignment: 'center', bold: true},
//                 {text: 'UBICACIÓN', alignment: 'center', bold: true}
//               ],
//               [
//                 {text: '1.', alignment: 'center'},
//                 {},
//                 {}
//               ],
//               [
//                 {text: '2.', alignment: 'center'},
//                 {},
//                 {}
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [276, 276],
//             body: [
//               [
//                 {text: '6. AUTORIZACIÓN', bold: true, fillColor: '#a5c3dd', colSpan: 2},
//                 {}
//               ],
//               [
//                 {text: 'PROPONE:\n\nGamaliel Chavarría\nENCARGADO', alignment: 'center'},
//                 {text: 'APROBADO POR:\n\nSergio Lechuga\nREPRESENTANTE TÉCNICO', alignment: 'center'}
//               ]
//             ]
//           }
//         }
//     ],
//       pageSize: 'LETTER',
//       pageMargins: [22, 120]
//     };
//     this.pdfMaker.generate(dd, 'Planeacion de simulacros');
//   }

//   evaluacionSimulacroDerrame() {
//     const fecha = new Date();
//     const day = fecha.getDate();
//     const month = fecha.getUTCMonth() + 1;
//     const year = fecha.getFullYear();
//     // const marcaAgua = this.marcaAguaEstacion;
//     // const iconoEstacion = this.iconoEstacion;
//     // const firmaEstacion = this.firmaEstacion;
//     // const footer = this.myImage;
//     // const ddd = this.datosEstacion;
//     const dd = {
//       // background(currentPage, pageSize) {
//       //   return {
//       //     image: `${marcaAgua}`,
//       //     width: 290,
//       //     height: 400,
//       //     absolutePosition: {x: 170, y: 210},
//       //     opacity: 0.4
//       //   };
//       // },
//       header() {
//         return {
//           table: {
//             widths: [150, 400],
//             heights: [30, 10, 10],
//             body: [
//               [
//                 {
//                   // image: `${iconoEstacion}`,
//                   // width: 45,
//                   // height: 60,
//                   // alignment: 'left',
//                   // border: [true, true, false, true],
//                   // margin: [7, 0]
//                 },
//                 {
//                   text: `Nombre de la Estación`,
//                   bold: true,
//                   fontSize: 15,
//                   alignment: 'center',
//                   margin: [0, 15],
//                   border: [false, true, true, true],
//                 }
//               ],
//               [
//                 {
//                   text: 'XIII. PREPARACIÓN Y RESPUESTA DE EMERGENCIAS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                 },
//                 {}
//               ],
//               [
//                 {
//                   text: 'EVALUACIÓN DE SIMULACROS',
//                   bold: true,
//                   alignment: 'center',
//                   colSpan: 2,
//                   fillColor: '#ddd',
//                 },
//               ]
//             ]
//           },
//           margin: [22, 15]
//         };
//       },
//       footer(currentPage, pageCount) {
//         return {
//           table: {
//             headerRows: 1,
//             widths: [510],
//             body : [
//               [
//                 {
//                   columns: [
//                     'Página' + currentPage.toString() + ' de ' + pageCount,
//                     {text: `P-SA-01 Rev.0, ${day}/${month}/${year}`, width: 180}
//                   ]
//                 }
//               ],
//               [
//                 {
//                   // image: `${footer}`,
//                   // pageBreak: 'after',
//                   // width: 510,
//                   // height: 60,
//                 },
//               ],
//               [''],
//             ]
//           },
//           layout: 'headerLineOnly',
//           margin: [50, 20],
//         };
//       },
//       content: [
//         {
//           table: {
//             widths: [559],
//             heights: [10],
//             body: [
//               [{text: '1. INFORMACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd'}],
//             ]
//           },
//         },
//         {
//           table: {
//             widths: [250, 300],
//             heights: [10, 10, 10, 10, 10, 10, 10],
//             body: [
//               [
//                 {text: `ÁREA: Despacho`, bold: true, fillColor: '#ddd'},
//                 {text: `FECHA Y HORA PROGRAMADA: ${this.datos5.fecha}`, bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: 'EQUIPO: Dispensario, mangueras y válvulas de corte', bold: true, fillColor: '#ddd'},
//                 {text: `CON AVISO PREVIO: ${this.datos5.aviso}`, bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: `CLASE DE SIMULACRO: ${this.datos5.claseSimulacro}`, bold: true, fillColor: '#ddd'},
//                 {text: 'AGENTE PERTURBADOR: Gasolina', bold: true, fillColor: '#ddd'}
//               ],
//               [
//                 {text: 'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:', bold: true, fillColor: '#ddd', colSpan: 2}
//               ],
//               [
//                 {text: `${this.datos5.descripcionEmergencia}`, colSpan: 2, rowSpan: 3}
//               ],
//               [
//                 {text: ''}
//               ],
//               [
//                 {text: ''}
//               ],
//             ],
//           },
//         },
//         {text: '\n\n'},
//         {
//           table: {
//             widths: [70, 200, 270],
//             heights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
//             body: [
//               [
//                 {text: 'EVALUACIÓN', bold: true, fillColor: '#ddd', colSpan: 3},
//                 {text: ''},
//                 {text: ''}
//               ],
//               [
//                 {text: 'OBJETIVO', bold: true, fillColor: '#ddd', aligment: 'center'},
//                 {text: 'CONCEPTOS EVALUADOS', bold: true, fillColor: '#ddd', aligment: 'center'},
//                 {text: 'ACIERTOS Y DEFICIENCIAS OBSERVADAS', bold: true, fillColor: '#ddd', aligment: 'center'}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//               [
//                 {},
//                 {},
//                 {}
//               ],
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [559], heights: [10, 70],
//             body: [
//               [
//                 {text: '3. OBSERVACIONES', bold: true, fillColor: '#ddd'}
//               ],
//               [{}]
//             ]
//           }
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [559],
//             heights: [10, 70],
//             body: [
//               [{text: '4. CONCLUSIONES', bold: true, fillColor: '#ddd'}],
//               [{}],
//             ],
//           },
//         },
//         {text: '\n'},
//         {
//           table: {
//             widths: [186, 186, 180], heights: [10, 80],
//             body: [
//               [
//                 {text: '5. AUTORIZACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd', colSpan: 3}
//               ],
//               [
//                 {text: 'PROPONE:', aligment: 'center'},
//                 {text: 'APROBADO POR:', aligment: 'center'},
//                 {text: 'AUTORIZA:', aligment: 'center'}
//               ],
//             ],
//           },
//         },
//       ],
//       styles: {
//         header: {
//           fontSize: 18,
//           bold: true
//         },
//       },
//       pageSize: 'LETTER',
//       pageMargins: [22, 120]
//     };
//     this.pdfMaker.generate(dd, 'Evaluacion de simulacro');
//   }

// }
