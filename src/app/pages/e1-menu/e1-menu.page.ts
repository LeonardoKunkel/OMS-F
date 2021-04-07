import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstacionService } from 'src/app/services/estacion.service';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-e1-menu',
  templateUrl: './e1-menu.page.html',
  styleUrls: ['./e1-menu.page.scss'],
})
export class E1MenuPage implements OnInit {
  DataEstacion: any = {};
  idEstacion = "";

  constructor(
    private route: ActivatedRoute,
    private _estacionService: EstacionService,
    private router: Router,
    private document: DocumentViewer,
    private navCtrl: NavController,
    private fileOpener: FileOpener
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.idEstacion = id;
    this.getEstacion(id);
    //console.log(id,'Elemento 1');
  }

  getEstacion(id:string){
    this._estacionService.getEstacionId(id).subscribe((data:any) =>{
     // console.log(data);
      this.DataEstacion = data;
    });
  }

  goPolitica(){
    this.router.navigate(['/e1-politica', {custom_id: this.idEstacion}]);
  }

  openProcedure() {
    const options: DocumentViewerOptions = {
      title: 'P-SA-01'
    };
    this.document.viewDocument('app/docs/P-SA-01 POLÍTICA1.pdf', 'application/pdf', options)
  }
  
  goProcedure() {
    this.navCtrl.navigateForward('/e1-menu/e1-procedimiento');
  }
  
  anotherProcedure() {
    this.fileOpener.open('../../docs/P-SA-01 POLÍTICA1.pdf', 'application/pdf')
      .then(() => console.log('File opened'))
      .catch(e => console.log('Error opening file', e))
  }
}
