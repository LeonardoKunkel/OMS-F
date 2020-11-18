import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e6-menu',
  templateUrl: './e6-menu.page.html',
  styleUrls: ['./e6-menu.page.scss'],
})
export class E6MenuPage implements OnInit {
  DataEstacion:any={};
  idEstacion = "";

  constructor(
    private route: ActivatedRoute,
    private _estacionService: EstacionService,
    public navCtrl: NavController,
    private router: Router
  ) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.idEstacion = id;
    this.getEstacion(id);
    console.log(id,'Elemento 1');
  }

  getEstacion(id:string){
    this._estacionService.getEstacionId(id).subscribe((data:any) =>{
     // console.log(data);
      this.DataEstacion = data;
    });
  }

  goPuntoPerfilPuesto(){
    this.router.navigate(['/e6-perfil-puesto', {custom_id: this.idEstacion}]);
  }

}
