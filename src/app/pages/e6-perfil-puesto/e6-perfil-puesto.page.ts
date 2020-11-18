import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';
import { E6DespachadoresPage } from '../e6-despachadores/e6-despachadores.page';
import { E6DirectorPage } from '../e6-director/e6-director.page';
import { E6EncargadoPage } from '../e6-encargado/e6-encargado.page';
import { E6JefePisoPage } from '../e6-jefe-piso/e6-jefe-piso.page';
import { E6PersonalMantenimientoPage } from '../e6-personal-mantenimiento/e6-personal-mantenimiento.page';
import { E6RepresentanteTecnicoPage } from '../e6-representante-tecnico/e6-representante-tecnico.page';

@Component({
  selector: 'app-e6-perfil-puesto',
  templateUrl: './e6-perfil-puesto.page.html',
  styleUrls: ['./e6-perfil-puesto.page.scss'],
})
export class E6PerfilPuestoPage implements OnInit {
  DataEstacion:any={};
  idEstacion = " ";
  constructor(
    private route: ActivatedRoute,
    private _estacionService: EstacionService,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private router: Router
  ) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.getEstacion(id);
    console.log(id,'Elemento 6 perfil puesto');
  }

  getEstacion(id:string){
    this._estacionService.getEstacionId(id).subscribe((data:any) =>{
     // console.log(data);
      this.DataEstacion = data;
    });
  }

  async openModal(){
    const modal = await this.modalCtrl.create({ ///falta llevar el id de la estacion de servicio al modal
      component: E6DirectorPage
    });
    return await modal.present();
  }
  async openModal2(){
    const modal = await this.modalCtrl.create({
      component: E6RepresentanteTecnicoPage
    });
    return await modal.present();
    
  }
  async openModal3(){
    const modal = await this.modalCtrl.create({
      component: E6EncargadoPage
    });
    return await modal.present();
    
  }
  async openModal4(){
    const modal = await this.modalCtrl.create({
      component: E6JefePisoPage
    });
    return await modal.present();
    
  }
  async openModal5(){
    const modal = await this.modalCtrl.create({
      component: E6DespachadoresPage
    });
    return await modal.present();
    
  }
  async openModal6(){
    const modal = await this.modalCtrl.create({
      component: E6PersonalMantenimientoPage
    });
    return await modal.present();
    
  }

}
