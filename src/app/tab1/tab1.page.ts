import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EstacionService } from '../services/estacion.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  estacion:any={};
  cp:any={};
  gerente:any={};
  autoridad:any={};
  representante:any={};
  idEstacion:'';
  constructor(
    private router:ActivatedRoute,
    private route: Router,
    private _estacion:EstacionService,
    private navCtrl:NavController

   ) {
    const id = this.router.snapshot.paramMap.get('custom_id');
    this.getEstacionID(id);
  }

  getEstacionID(id:string){
    this._estacion.getEstacionId(id).subscribe((data: any)=>{
      this.idEstacion = data._id;
      this.estacion = data;
      this.cp = data.cp;
      this.gerente = data.idGerente;
      this.autoridad = data.idAutoridad;
      this.representante = data.idRepresentante;
      console.log(data, ' Esta es tu estacion');
    });
  }

  goSasisopa(){
    // console.log('Hola mundo', this.idEstacion);
    this.route.navigate(['/tabs/tab2', {custom_id: this.idEstacion}]);
    
  }


  abrirCalendario() {
    this.navCtrl.navigateForward('/calendario');
  }

  grafica() {
    this.navCtrl.navigateForward('/grafica');
  }

}
