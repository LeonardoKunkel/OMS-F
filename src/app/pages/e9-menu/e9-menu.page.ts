import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e9-menu',
  templateUrl: './e9-menu.page.html',
  styleUrls: ['./e9-menu.page.scss'],
})
export class E9MenuPage implements OnInit {
  DataEstacion: any = {};

  constructor(
    private route: ActivatedRoute,
    private _estacionService: EstacionService,
    private navCtrl:NavController
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

  goListado(){
    this.navCtrl.navigateForward('/e9-listado-codigos-estandares');
  }
  
  goProcedure() {
    this.navCtrl.navigateForward('/e9-menu/e9-procedimiento');
  }
}
