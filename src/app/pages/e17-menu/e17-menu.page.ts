import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e17-menu',
  templateUrl: './e17-menu.page.html',
  styleUrls: ['./e17-menu.page.scss'],
})
export class E17MenuPage implements OnInit {
  DataEstacion:any={};

  constructor(
    private route: ActivatedRoute,
    private _estacionService: EstacionService     
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
}
