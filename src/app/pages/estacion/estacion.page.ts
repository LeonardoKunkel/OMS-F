import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AutoridadService } from 'src/app/services/autoridad.service';
import { CpService } from 'src/app/services/cp.service';
import { EstacionService } from 'src/app/services/estacion.service';
import { GerenteService } from 'src/app/services/gerente.service';
import { RepresentanteService } from 'src/app/services/representante.service';


@Component({
  selector: 'app-estacion',
  templateUrl: './estacion.page.html',
  styleUrls: ['./estacion.page.scss'],
})
export class EstacionPage implements OnInit {
  datos:any={
    nombre: "",
    correo: "",
    telefono: "",
    idRepresentante:'',
    idAutoridad:'',
    idGerente:'',
    cp:{

    },
    calleNumero:''
  };
  respuestaCP: any = [];
  datosCp:any =[];
  selecion:any= {};
  datosAutoridad:any= [];
  datosRepresentante:any= [];
  datosGerente:any= [];
  constructor(
    public modalCtrl:ModalController,
    private cpService:CpService,
    private _representanteService: RepresentanteService,
    private _autoridadService: AutoridadService,
    private _gerenteService: GerenteService,
    private _estacionService: EstacionService
    ) { }

  ngOnInit() {
    this.getRepresentante();
    this.getAutoridad();
    this.getGerente();
  }

  getRepresentante(){
    this._representanteService.getRepresentante().subscribe((data:any) =>{
      //console.log(data);
      this.datosRepresentante = data.representante;
    });
  }

  getAutoridad(){
    this._autoridadService.getAutoridad().subscribe((data:any) =>{
      //console.log(data);
      this.datosAutoridad = data.autoridad;
    });
  }

  getGerente(){
    this._gerenteService.getGerente().subscribe((data:any) =>{
      // console.log(data);
      this.datosGerente = data.gerente;
    });
  }

  close(){
    this.modalCtrl.dismiss();
  }

  cpServices(event){
    //Servicio funciona en base al ionChange del select
    let codigoPostal= event.detail.value;
    this.cpService.getCp(codigoPostal).subscribe((data:any) =>{
      this.respuestaCP = data;
      console.log(this.respuestaCP);
    })
  }

  select(event){
    //  this.selecion = event.target.value;
    // // console.log(this.selecion);
    this.datos.cp = event.target.value;
  }

  cambioAutoridad(event){
    // console.log(event.target.value);
    this.datos.idAutoridad = event.target.value;
  }
  cambioGerente(event){
    // console.log(event.target.value);
    this.datos.idGerente = event.target.value;
  }
  cambioRepresentante(event){
    // console.log(event.target.value);
    this.datos.idRepresentante = event.target.value;
  }

  form(){
    //console.log(this.datos);
    this._estacionService.postEstacion(this.datos).subscribe((data:any) =>{
      console.log(data);
    });
  }
}
