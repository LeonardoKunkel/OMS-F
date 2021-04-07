import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e12-menu',
  templateUrl: './e12-menu.page.html',
  styleUrls: ['./e12-menu.page.scss'],
})
export class E12MenuPage implements OnInit {
  DataEstacion:any={};

  constructor(
    private route: ActivatedRoute,
    private _estacionService: EstacionService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.getEstacion(id);
    //console.log(id,'Elemento 1');
  }
  getEstacion(id:string){
    this._estacionService.getEstacionId(id).subscribe((data:any) =>{
      console.log(data);
      this.DataEstacion = data;
    });
  }

  goAnexo() {
    this.navCtrl.navigateForward('/e12-menu/e12-anexo');
  }

  goCarta() {
    this.navCtrl.navigateForward('/e12-menu/e12-carta');
  }
  
  goProcedure() {
    this.navCtrl.navigateForward('/e12-menu/e12-procedimiento');
  }
}
