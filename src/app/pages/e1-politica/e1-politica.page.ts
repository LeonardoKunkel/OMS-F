import { PdfMakerService } from './../../services/pdf-maker.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';
import { Canvas, Cell, Columns, Img, Line, PageReference, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { RepresentanteService } from 'src/app/services/representante.service';
import { E1PoliticaService } from 'src/app/services/e1-politica.service';
@Component({
  selector: 'app-e1-politica',
  templateUrl: './e1-politica.page.html',
  styleUrls: ['./e1-politica.page.scss'],
})
export class E1PoliticaPage implements OnInit {

  datosEstacion: any = {};
  
  @ViewChild('politica1') politicaUno;
  @ViewChild('politica2') politicaDos;
  @ViewChild('politica3') politicaTres;
  
  politicaSelected: string = '';
  firmaRepresentante: '';
  politicas: any[] = [];

  constructor(
    private route: ActivatedRoute,
    public alertCtrl: AlertController,
    private _estacionService : EstacionService,
    private _representanteService: RepresentanteService,
    private politicaService: E1PoliticaService,
    private pdfMaker: PdfMakerService
  ) { }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('custom_id');
    // console.log('Id seleccionado Politica:',id);
    // this.getEstacion(id);
    this.getPolitica();
  }

  getEstacion(id: string) {
    this._estacionService.getEstacionId(id).subscribe((data: any) => {
      this.datosEstacion = data;
      console.log(data,' esta es tu data');
      this._getRepresentante(data.idRepresentante._id);
    });
  }

  _getRepresentante(id: string) {
    this._representanteService.getRepresentanteId(id).subscribe((data: any) => {
      console.log(data,'Representante');
      this.firmaRepresentante = data.newRepresentante.firma;
    });
  }

  getPolitica() {
    this.politicaService.getPolitica().subscribe((data: any) => {
      console.log(data);
      // this.politicas = data.politicasFound.splice(0,3);
      this.politicas = data.politicasFound.splice(0,3);
      this.politicaSelected = data.politicasFound[0].politicaSelected;
      console.log(this.politicaSelected);
    });
  }


  // politicaSelected( p: string ) {
  //   this.politicaEscogida = p;
  //   this.politicaService.postPolitica(this.politicaEscogida).subscribe((data: any) => {
  //     console.log(data);
  //   });
  // }

  updatePolitica( p: string ) {
    this.politicaSelected = p;
    const idPolSelected = '607da847a3458326983ed4fb';
    this.politicaService.updatePolitica(idPolSelected, {
      politicaSelected: this.politicaSelected
    }).subscribe((data: any) => {
      console.log(data.politicaUpdated);
      this.politicaSelected = data.politicaUpdated.politicaSelected;
    });
    // this.getPolitica();
  }

  // options(e) {
  //   let result = e.target.value;
  //   if (result === 'politica1') {
  //     let politica1 = this.politicaUno.nativeElement.innerText;
  //     this.politicaEscogida = politica1;
  //     // console.log(politica1);
  //   } else if(result === 'politica2') {
  //     let politica2 = this.politicaDos.nativeElement.innerText;
  //     this.politicaEscogida = politica2;
  //     // console.log(politica2);
  //   } else if(result === 'politica3') {
  //     let politica3 = this.politicaTres.nativeElement.innerText;
  //     this.politicaEscogida = politica3;
  //     // console.log(politica3);
  //   }
  //   console.log(this.politicaEscogida.toString());
  // }

  async myPolitica() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Crear Politíca',
      message: 'En este apartado puedes crar tu propia politíca de la Estación de Servicio',
      inputs: [
        {
          name: 'politicaCreada',
          type: 'textarea',
          placeholder: 'Escribe...',
          
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Aceptar',
          handler: ( e ) => {
            console.log( e );
            this.politicaSelected = e.politicaCreada;
            console.log(this.politicaSelected)
          }
        }
      ]
    });
    await alert.present();
  }

  pdf() {
    var dd = {
      header() {
        return {
          table: {
            widths: [100, 450],
            heights: [50, 15, 15],
            body: [
              [
                {},
                {}
              ],
              [
                {
                  text: 'I. POLÍTICA',
                  colSpan: 2,
                  alignment: 'center',
                  fontSize: 11
                }
              ],
              [
                {
                  text: 'Política',
                  colSpan: 2,
                  alignment: 'center',
                  fontSize: 11,
                  fillColor: '#ddd',
                  bold: true
                }
              ]
            ]
          },
          margin: [22, 7]
        }
      },
      content: [
        {
          text: '\n\n\n\n'
        },
        {
          text: `Nombre de la Estación de Servicio`,
          alignment: 'center',
          fontSize: 16
        },
        {
          text: '\n\n\n\n'
        },
        {
          text: `${this.politicaSelected}`,
          alignment: 'justify',
          fontSize: 16,
          margin: [30, 15]
        },
        {
          text: '\n\n\n\n'
        },
        {
          text: ''
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    }
    this.pdfMaker.generate(dd, 'Politica');
  }

  // async pdf() {
  //   PdfMakeWrapper.useFont('Sony_Sketch_EF');
  //   let pdf = new PdfMakeWrapper();
  
  //   pdf.header(
  //     await new Table([
  //       [
  //           new Columns([
  //           // await new Img ('../../../assets/icon/favicon.png').
  //           await new Img (`http://localhost:3000/logo/${this.datosEstacion.filename}`).
  //           height(55).
  //           width(40).
  //           alignment('center')
  //           .build(),
  //           new Txt(`${this.datosEstacion.nombre}`).alignment('center').fontSize(15).bold().end
  //         ]).end
  //       ],
  //         [new Cell(new Txt('I. POLÍTICA').alignment('center').end).end],
  //         [new Cell(new Txt('SISTEMA DE LA ADMINISTRACIÓN DE LA SEGURIDAD INDUSTRIAL SEGURIDAD OPERATIVA Y PROTECCIÓN DEL MEDIO AMBIENTE').fontSize(8).alignment('center').end).fillColor('#d7d8d6').end]
  //     ]).margin([20,0]).relativePosition(90,90).margin(-70 |-100).widths([560]).end
  //   );
    
  //   pdf.background(
  //     [
  //       await new Img(`http://localhost:3000/logo/${this.datosEstacion.filename}`)
  //       height(300).
  //       width(200).
  //       opacity(0.3).
  //       margin([200,300]).
  //       build()
  //     ]
  //   );

    
  //   pdf.add([
  //     new Txt(`${this.politicaSelected}`).margin([20,120]).alignment('justify').fontSize(20).end,
  //     await new Img(`${this.firmaRepresentante}`).height(80).width(80).alignment('center').build() ,
  //     new  Canvas ( [ 
  //         new  Line ( [ 10 , 10 ] ,  [ 150 ,  10 ] ) . end
  //     ] ).alignment('center').end ,
  //     new Txt('REPRESENTANTE LEGAL').alignment('center').end ,
  //     new Txt(`${this.datosEstacion.idRepresentante.nombre} ${this.datosEstacion.idRepresentante.apellidos}`).alignment('center').end ,
  //   ]);
    
  //   pdf.footer(
  //     await new Img (`../../../assets/images/footer.png`).
  //     height(80).
  //     width(600).
  //     margin([0,-70]).
  //     build(),
  //   )

  //   pdf.pageSize('LETTER');
  //   pdf.pageMargins([20, 30, 30, 20]);
  //   pdf.pageOrientation('portrait');
  //   pdf.create().open();
  // }

}
