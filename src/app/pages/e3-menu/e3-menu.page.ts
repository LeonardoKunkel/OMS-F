import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstacionService } from 'src/app/services/estacion.service';
import { PdfMakeWrapper, Txt, Table, Cell, Img } from 'pdfmake-wrapper';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-e3-menu',
  templateUrl: './e3-menu.page.html',
  styleUrls: ['./e3-menu.page.scss'],
})
export class E3MenuPage implements OnInit {
  DataEstacion: any = {};
  idEstacion = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _estacionService: EstacionService,
    private navCtrl: NavController
  ) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.getEstacion(id);
    this.idEstacion = id;
  }

  getEstacion(id:string){
    this._estacionService.getEstacionId(id).subscribe((data:any) =>{
      //console.log(data);
      this.DataEstacion = data;
    });
  }

  goRequisitos(){
    this.router.navigate(['/e3-requisitos-legales', {custom_id: this.idEstacion}]);
  }

  goProcedure() {
    this.navCtrl.navigateForward('/e3-menu/e3-procedimiento');
  }
  // goProcedimiento(){
  //   console.log('procedimiento');
    
  // }

  // async goRequisitos(){
  //   const pdf = new PdfMakeWrapper();
  //   pdf.pageSize('letter');
  //   pdf.pageOrientation('landscape');
  //   //HEADER
  //   pdf.header(
  //     new Table ([
  //       [  
  //         new Cell( new Txt(`${this.DataEstacion.nombre}`).bold().fontSize(12).end ).end
  //       ],
  //       [  
  //         new Cell( new Txt('Column 2 with colspan').bold().fontSize(5).end ).end
  //       ],
  //       [  
  //         new Cell( new Txt('Column 2 with colspan').bold().fontSize(5).end ).end
  //       ]
  //     ]).widths([560]).alignment('center').margin([20, 8]).end
  //   );
  //   // background
  //   pdf.background(
  //       await new Img('../../../assets/icon/vms-transparencia.png').
  //       height(320).
  //       width(300).
  //       opacity(0.3).
  //       margin([150,200]).
  //       build()
  //   );
  //   //Contenido tabla ya generada
  //   pdf.add(pdf.ln(2));
  //   pdf.add(
  //     new Table ([
  //       [  
  //         new Cell( new Txt(`No.`).bold().fontSize(10).end ).fillColor('#f2f2f2').end,
  //         new Cell( new Txt(`MATERIA`).bold().fontSize(10).end ).fillColor('#f2f2f2').end,
  //         new Cell( new Txt(`DOCUMENTO APLICABLE (Norma. Ley, Reglamento)`).bold().fontSize(10).end ).fillColor('#f2f2f2').end,
  //         new Cell( new Txt(`NUMERAL`).bold().fontSize(10).end ).fillColor('#f2f2f2').end,
  //         new Cell( new Txt(`REQUISITO LEGAL`).bold().fontSize(10).end ).fillColor('#f2f2f2').end,
  //       ],[
  //         new Cell( new Txt(`ASEA: AGENCIA NACIONAL DE SEGURIDAD INDUSTRIAL Y DE PROTECCIÓN DEL MEDIO AMBIENTE`).bold().fontSize(10).end ).fillColor('#f2f2f2').colSpan(5).end,
  //         new Cell( new Txt(``).end).end,
  //         new Cell( new Txt(``).end).end,
  //         new Cell( new Txt(``).end).end,
  //         new Cell( new Txt(``).end).end,
  //       ],[
  //         new Cell( new Txt(`1`).fontSize(10).end ).end,
  //         new Cell( new Txt(`Emisiones a la atmosfera`).fontSize(10).end ).end,
  //         new Cell( new Txt(` Ley General del Equilibrio Ecológico y la Protección al Ambiente`).fontSize(10).end ).end,
  //         new Cell( new Txt(`artículo 111 Bis`).fontSize(10).end ).end,
  //         new Cell( new Txt(`Licencia Ambiental Única del Sector Hidrocarburos`).fontSize(10).end ).end,
  //       ],[
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(`Reglamento de la Ley General del Equilibrio Ecológico y la Protección al Ambiente en Materia de Prevención y Control de la Contaminación de la Atmósfera`).fontSize(10).end ).end,
  //         new Cell( new Txt(`artículos: 18 y 19.`).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //       ],[
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //       ],[
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //       ],[
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //       ],[
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //       ],[
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //       ],[
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //       ],[
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //       ],[
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //       ],[
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //       ],[
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //       ],[
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //         new Cell( new Txt(``).fontSize(10).end ).end,
  //       ]
  //     ]).widths([30, 90, 300, 100, 185]).alignment('center').margin([-20, 8]).end
  //   );
  //   //FOOTER
  //   pdf.footer(
  //     await new Img('../../../assets/images/copyright_footer-07.png').
  //     height(100).
  //     width(560).
  //     margin([15, -70]).
  //     build() 
  //   );
  //   pdf.create().open();
  // }
}
