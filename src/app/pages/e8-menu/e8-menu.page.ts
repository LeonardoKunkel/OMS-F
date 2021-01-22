import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';
import { Cell, Ol, PdfMakeWrapper, Table, Txt, Ul } from 'pdfmake-wrapper';

@Component({
  selector: 'app-e8-menu',
  templateUrl: './e8-menu.page.html',
  styleUrls: ['./e8-menu.page.scss'],
})
export class E8MenuPage implements OnInit {
  DataEstacion: any = {};

  constructor(
    private route: ActivatedRoute,
    private _estacionService: EstacionService,
    private alertController: AlertController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.getEstacion(id);
    // console.log(id,'Elemento 1');
  }
  getEstacion(id: string){
    this._estacionService.getEstacionId(id).subscribe((data: any) => {
      console.log(data);
      this.DataEstacion = data;
    });
  }

  async procedimientoInstructivo(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Importante',
      message: 'Este documento se debe de imprimir en caso de que requieras realizar un procedimiento,Instructivo o metodologia, debes de seguir los apartados requeridos en la plantilla.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Imprimir',
          handler: () => {
            this.pdf();
          }
        }
      ]
    });

    await alert.present();
  }

  pdf(){
    const pdf = new PdfMakeWrapper();
    
    pdf.add(
      [
        new Txt('NOMBRE \nDEL\n PROCEDIMIENTO').margin([130, 200]).alignment('center').fontSize(30).end,
        new Table([
          [
            `
            REVISADO POR:\n\n
            {Roberto Muñoz Torres}\n
            REPRESENTANTE TÉCNICO 
            `,
            `
            APROBADO POR:\n\n
            {Fernando Bedoy Ruiz}\n
            MÁXIMA AUTORIDAD
            
            `
          ]
        ]).widths([250, 250]).alignment('center').end, 
        pdf.ln(15)
      ]
    )
    pdf.add(
      [
        new Txt('CONTENIDO').fontSize(15).alignment('center').bold().end,
        pdf.ln(3),
        new Ol([
          'Objetivo\n ',
          'Alcance\n ',
          'Responsabilidad\n ',
          'Definiciones\n ',
          [
            'Desarrollo',
            new Ol([
              '.... ',
              '.... ',
            ]).type('upper-roman').end
          ],
          'Registros\n ',
          'Referencias\n ',
          'Control de Cambios'
        ]).fontSize(20).bold().end
      ]
    )

    pdf.add(
      [
        pdf.ln(20),
        new Ol([
          'Objetivo\n ',
          'Alcance\n ',
          'Responsabilidad\n ',
          'Definiciones\n ',
          'Desarrollo\n ',
          [
            'Control de Cambios\n ',
            new Table([
              [ 
                new Cell(new Txt('No.	de Revisión').end ).end,
                new Cell(new Txt('Fecha	de Revisión').end ).end,
                new Cell(new Txt('Concepto o parte del documento que ha sido modificado sobre la anterior revisión.').end ).end
              ],
              [
                new Cell(new Txt('').end ).end,
                new Cell(new Txt('').end ).end,
                new Cell(new Txt('').end ).end
              ]
            ]).heights(
              rowIndex =>{
                const a = rowIndex === 2 ? 10 :40;    //el ultimo es el valor de la altura
                 return a ;
              }
            ).end
          ],
        ]).fontSize(12).bold().end,

      ]
    )

    // pdf.pageOrientation('portrait');
    pdf.create().open();

  }

  goLista(){
    this.navCtrl.navigateForward('e8-lista-maestra-documentos-internos');
  }

  goSolicitud(){
    this.navCtrl.navigateForward('e8-solicitud-cambios');
  }
}
