import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EstacionService } from '../services/estacion.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  datosEstacion:any={};
  idEstacion="";

  constructor(
    public navCtrl: NavController,
    private route:ActivatedRoute,
    private _estacionService: EstacionService,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.idEstacion = id;
    this.getEstacion(id);
    //console.log('Id seleccionado:',id);
  }

  ngOnInit() {
  }

  getEstacion(id:string){
    this._estacionService.getEstacionId(id).subscribe((data:any) =>{
      //console.log(data);
      this.datosEstacion = data;
    });
  }
  goPuntoUno(){
    this.router.navigate(['/e1-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoDos(){
    this.router.navigate(['/e2-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoTres(){
    this.router.navigate(['/e3-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoCuatro(){
    this.router.navigate(['/e4-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoCinco(){
    this.router.navigate(['/e5-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoSeis(){
    this.router.navigate(['/e6-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoSiete(){
    this.router.navigate(['/e7-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoOcho(){
    this.router.navigate(['/e8-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoNueve(){
    this.router.navigate(['/e9-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoDiez(){
    this.router.navigate(['/e10-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoOnce(){
    this.router.navigate(['/e11-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoDoce(){
    this.router.navigate(['/e12-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoTrece(){
    this.router.navigate(['/e13-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoCatorce(){
    this.router.navigate(['/e14-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoQuince(){
    this.router.navigate(['/e15-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoDieciseis(){
    this.router.navigate(['/e16-menu', {custom_id: this.idEstacion}]);
  }
  goPuntoDiecisiete(){
    this.router.navigate(['/e17-menu', {custom_id: this.idEstacion}]);
  }
  goElemento18(){
    this.navCtrl.navigateForward('/e18-procedimiento')
  }

}
