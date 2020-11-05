import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RepresentanteService } from 'src/app/services/representante.service';

@Component({
  selector: 'app-representante-read',
  templateUrl: './representante-read.page.html',
  styleUrls: ['./representante-read.page.scss'],
})
export class RepresentanteReadPage implements OnInit {
  maximaA:any[]=[];

  constructor(
    private _representanteService: RepresentanteService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.getRepresentante();
  }

  getRepresentante(){
    this._representanteService.getRepresentante().subscribe((data:any) =>{
      console.log(data);
      this.maximaA = data.representante;
    })
  }

  delete(id:string){
    this._representanteService.deleteRepresentanteId(id).subscribe((data:any) =>{
      console.log(data);
    });
    this.navCtrl.navigateForward('/tabs/tab1');
  }


}
