import { ExtintoresService } from './../services/extintores.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public anArray:any=[];
  form: any = {
    ubicacion:'',
    agente:'',
    paro: '',
    botiquin: ''
  };
  extintor: any[] = [];

  constructor( private extintorServ: ExtintoresService, public toast: ToastController ) { }

  ngOnInit() {
    this.getExt();
  }

  getExt() {
    this.extintorServ.getExtintor().subscribe((data: any) => {
      // console.log(data);
      this.extintor = data.extinguisherFound;
    });
  }

  postExt() {
    this.extintorServ.postExtintor(this.form).subscribe((data: any) => {
      console.log(data);
    });
    this.getExt();
  }

  async delete(id: string) {
    this.extintorServ.deleteExtintorId(id).subscribe(
      (data: any) => {
        this.getExt();
      }
    );
    const toast = await this.toast.create({
      message: 'Ubicación eliminada',
      duration: 1500
    });
    toast.present();
  }
}
