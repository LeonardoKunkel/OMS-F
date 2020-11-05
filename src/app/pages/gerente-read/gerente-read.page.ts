import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GerenteService } from 'src/app/services/gerente.service';

@Component({
  selector: 'app-gerente-read',
  templateUrl: './gerente-read.page.html',
  styleUrls: ['./gerente-read.page.scss'],
})
export class GerenteReadPage implements OnInit {
  maximaA:any[]=[];
  constructor(
    public navCtrl: NavController,
    private _gerenteService: GerenteService
    ) { }

  ngOnInit() {
    this.getGerente();
  }

  getGerente(){
    this._gerenteService.getGerente().subscribe((data:any) =>{
      console.log(data);
      this.maximaA = data.gerente;
    })
  }

  delete(id:string){
    this._gerenteService.deleteGerenteId(id).subscribe((data:any) =>{
      console.log(data);
    });
    this.navCtrl.navigateForward('/tabs/tab1');
  }

}
