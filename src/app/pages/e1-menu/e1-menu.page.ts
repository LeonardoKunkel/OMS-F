import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e1-menu',
  templateUrl: './e1-menu.page.html',
  styleUrls: ['./e1-menu.page.scss'],
})
export class E1MenuPage implements OnInit {
  DataEstacion:any={};
  idEstacion = "";

  constructor(
    private route: ActivatedRoute,
    private _estacionService: EstacionService,
    private router: Router     
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.idEstacion = id;
    this.getEstacion(id);
    //console.log(id,'Elemento 1');
  }

  getEstacion(id:string){
    this._estacionService.getEstacionId(id).subscribe((data:any) =>{
     // console.log(data);
      this.DataEstacion = data;
    });
  }

  goPolitica(){
    this.router.navigate(['/e1-politica', {custom_id: this.idEstacion}]);
  }


}
