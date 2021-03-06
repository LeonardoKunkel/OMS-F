import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e5-menu',
  templateUrl: './e5-menu.page.html',
  styleUrls: ['./e5-menu.page.scss'],
})
export class E5MenuPage implements OnInit {
  DataEstacion:any={};
  idEstacion:any="";
  constructor(
    private route: ActivatedRoute,
    private _estacionService: EstacionService,
    private _routes: Router,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.idEstacion = id;
    this.getEstacion(id);
    //console.log(id,'Elemento 1');
  }
  getEstacion(id:string){
    this._estacionService.getEstacionId(id).subscribe((data:any) =>{
      console.log(data);
      this.DataEstacion = data;
    });
  }

  goMatriz(){
    this._routes.navigate(['/e5-matriz-responsabilidad', {custom_id: this.idEstacion}]);
  }

  async goCarta(){
    // const modal = await this.modalController.create({
    //   component: E5CartaDesignacionPage ,
    //   cssClass: 'my-custom-class'
    // });
    this._routes.navigate(['e5-carta-designacion', {custom_id: this.idEstacion}]);
    // return await modal.present();
  }
  
}
