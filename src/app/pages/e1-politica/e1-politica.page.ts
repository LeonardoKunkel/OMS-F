import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';
import { Canvas, Cell, Columns, Img, Line, PageReference, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { RepresentanteService } from 'src/app/services/representante.service';
import { from } from 'rxjs';
import { E1PoliticaService } from 'src/app/services/e1-politica.service';
import { stringify } from '@angular/compiler/src/util';
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
  politicaEscogida: string;
  firmaRepresentante: '';

  constructor(
    private route: ActivatedRoute,
    public alertCtrl: AlertController,
    private _estacionService : EstacionService,
    private _representanteService: RepresentanteService,
    private politicaService: E1PoliticaService
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    // console.log('Id seleccionado Politica:',id);
    this.getEstacion(id);
    this.getPolitica();
  }

  getEstacion(id: string){
    this._estacionService.getEstacionId(id).subscribe((data: any) => {
      this.datosEstacion = data;
       console.log(data,' esta es tu data');
      this._getRepresentante(data.idRepresentante._id);
      
    });
  }

  _getRepresentante(id:string){
    this._representanteService.getRepresentanteId(id).subscribe((data:any)=>{
      console.log(data,'Representante');
      this.firmaRepresentante = data.newRepresentante.firma;
    });
  }

  getPolitica() {
    this.politicaService.getPolitica().subscribe((data: any) => {
      console.log(data);
    });
  }

  postPolitica() {
    this.politicaService.postPolitica(this.politicaEscogida).subscribe((data: any) => {
      console.log(data);
    });
  }

  options(e){
    let result = e.target.value;
    if (result === 'politica1') {
      let politica1 = this.politicaUno.nativeElement.innerText;
      this.politicaEscogida = politica1;
      // console.log(politica1);
    } else if(result === 'politica2') {
      let politica2 = this.politicaDos.nativeElement.innerText;
      this.politicaEscogida = politica2;
      // console.log(politica2);
    } else if(result === 'politica3') {
      let politica3 = this.politicaTres.nativeElement.innerText;
      this.politicaEscogida = politica3;
      // console.log(politica3);
    }
    console.log(this.politicaEscogida.toString());
  }

  async myPolitica() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Crear Politíca',
      subHeader: 'Subtitle',
      message: 'En este apartado puedes crar tu propia politíca de la Estación de Servicio',
      inputs: [
        {
          name: 'politicaCreada',
          type: 'textarea',
          placeholder: 'Placeholder 1'
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
          handler: (e) => {
            console.log(e, 'Hola');
            this.politicaEscogida = e.politicaCreada;
          }
        }
      ]
    });
    await alert.present();
  }

  async pdf(){
    // PdfMakeWrapper.useFont('Sony_Sketch_EF');
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
      ]).margin([20,0]).relativePosition(90,90).margin(-70 |-100).widths([560]).end
    );
    
    pdf.background(
      [
        await new Img(`http://localhost:3000/logo/${this.datosEstacion.filename}`).
        height(300).
        width(200).
        opacity(0.3).
        margin([200,300]).
        build()
      ]
    );

    
    pdf.add([
      new Txt(`${this.politicaEscogida}`).margin([20,120]).alignment('justify').fontSize(20).end,
      await new Img(`${this.firmaRepresentante}`).height(80).width(80).alignment('center').build() ,
      new  Canvas ( [ 
          new  Line ( [ 10 , 10 ] ,  [ 150 ,  10 ] ) . end
      ] ).alignment('center').end ,
      new Txt('REPRESENTANTE LEGAL').alignment('center').end ,
      new Txt(`${this.datosEstacion.idRepresentante.nombre} ${this.datosEstacion.idRepresentante.apellidos}`).alignment('center').end ,
    ]);
    
    pdf.footer(
      await new Img (`../../../assets/images/footer.png`).
      height(80).
      width(600).
      margin([0,-70]).
      build(),
    )

    pdf.pageSize('LETTER');
    pdf.pageMargins([20, 30, 30, 20]);
    pdf.pageOrientation('portrait');
    pdf.create().open();
  }

}
