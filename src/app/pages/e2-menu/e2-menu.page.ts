import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private _estacionService: EstacionService,
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
  riesgos() {
    this.navCtrl.navigateForward('/e2-menu/e2-riesgos');
  }
  aspectosAmbientales() {
    this.navCtrl.navigateForward('/e2-menu/e2-aspectos');
  }
}
