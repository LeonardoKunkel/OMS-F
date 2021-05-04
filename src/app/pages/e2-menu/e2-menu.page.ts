import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e2-menu',
  templateUrl: './e2-menu.page.html',
  styleUrls: ['./e2-menu.page.scss'],
})
export class E2MenuPage implements OnInit {

  DataEstacion: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _estacionService: EstacionService,
    private navCtrl: NavController
  ) { }


  ngOnInit() {
  }

  getEstacion(id: string) {
    this._estacionService.getEstacionId(id).subscribe((data: any) => {
      console.log(data);
      this.DataEstacion = data;
    });
  }
  riesgos() {
    // let _idEstacion = this.DataEstacion._id;
    // this.router.navigate(['/e2-menu/e2-riesgos', {custom_id: _idEstacion}]);
    this.navCtrl.navigateForward('/e2-menu/e2-riesgos');
    // console.log(this.DataEstacion._id);
    
  }
  
  aspectosAmbientales() {
    this.navCtrl.navigateForward('/e2-menu/e2-aspectos');
  }
  
  goProcedure() {
    this.navCtrl.navigateForward('/e2-menu/e2-procedimiento')
  }
}
