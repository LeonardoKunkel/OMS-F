import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AutoridadService } from 'src/app/services/autoridad.service';

@Component({
  selector: 'app-autoridad-read',
  templateUrl: './autoridad-read.page.html',
  styleUrls: ['./autoridad-read.page.scss'],
})
export class AutoridadReadPage implements OnInit {
  maximaA: any[] = [];

  constructor(
    private _autoridadService:AutoridadService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.getAutoridad();
  }

  getAutoridad(){
    this._autoridadService.getAutoridad().subscribe((data:any) =>{
      console.log(data);
      this.maximaA = data.autoridad;
    })
  }

  delete(id:string){
    this._autoridadService.deleteAutoridadId(id).subscribe((data:any) =>{
      console.log(data);
    });
    this.navCtrl.navigateForward('/tabs/tab1');
  }

}
