import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e14-menu',
  templateUrl: './e14-menu.page.html',
  styleUrls: ['./e14-menu.page.scss'],
})
export class E14MenuPage implements OnInit {
  DataEstacion: any = {};

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private _estacionService: EstacionService
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

  evaluacion() {
    this.navCtrl.navigateForward('/e14-menu/e14-evaluacion');
  }

}
