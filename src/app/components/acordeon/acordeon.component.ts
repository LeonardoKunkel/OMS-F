import { E13SimulacroService } from './../../services/e13-simulacro.service';
import { EstacionService } from 'src/app/services/estacion.service';
import { PdfMakerService } from './../../services/pdf-maker.service';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.scss'],
})
export class AcordeonComponent implements OnInit {

  datos: any = {
    mes: '',
    aviso: '',
    fecha: '',
    descripcionEmergencia: '',
    claseSimulacro: '',
  };

  datos2: any = {
    mes: '',
    aviso: '',
    fecha: '',
    descripcionEmergencia: '',
    claseSimulacro: '',
  };

  datos3: any = {
    mes: '',
    aviso: '',
    fecha: '',
    descripcionEmergencia: '',
    claseSimulacro: '',
  };

  datos4: any = {
    mes: '',
    aviso: '',
    fecha: '',
    descripcionEmergencia: '',
    claseSimulacro: '',
  };

  datos5: any = {
    mes: '',
    aviso: '',
    fecha: '',
    descripcionEmergencia: '',
    claseSimulacro: '',
  };

  public disabled = false;
  public disabled2 = false;
  public disabled3 = false;
  public disabled4 = false;
  public disabled5 = false;

  constructor(
    private pdfMaker: PdfMakerService,
    private renderer: Renderer2,
    private estacionService: EstacionService,
    private simulacroService: E13SimulacroService
    
  ) { }

  ngOnInit() {}

  public change() {
    this.disabled = !this.disabled;
  }public change2() {
    this.disabled2 = !this.disabled2;
  }public change3() {
    this.disabled3 = !this.disabled3;
  }public change4() {
    this.disabled4 = !this.disabled4;
  }public change5() {
    this.disabled5 = !this.disabled5;
  }

}
