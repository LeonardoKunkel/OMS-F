import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e7-menu',
  templateUrl: './e7-menu.page.html',
  styleUrls: ['./e7-menu.page.scss'],
})
export class E7MenuPage implements OnInit {
  DataEstacion: any = {};

  constructor(
    private route: ActivatedRoute,
    private estacionService: EstacionService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.getEstacion(id);
  }
  getEstacion(id: string){
    this.estacionService.getEstacionId(id).subscribe((data: any) => {
      console.log(data);
      this.DataEstacion = data;
    });
  }

  goPuntoProcedimiento() {
    this.navCtrl.navigateForward('/');
  }

  goListaComunicacion() {
    this.navCtrl.navigateForward('/e7-menu/e7-lista');
  }

  goPuntoEvidencia() {
    this.navCtrl.navigateForward('/');
  }
}
