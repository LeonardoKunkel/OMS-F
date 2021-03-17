import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-informacion',
  templateUrl: './solicitud-informacion.page.html',
  styleUrls: ['./solicitud-informacion.page.scss'],
})
export class SolicitudInformacionPage implements OnInit {

  public arrayProduct:any=[];
  public arrayBotiquin:any=[];
  public arrayComunication:any=[];
  itemsComponents:any=[
    {
      name:'COMPRESOR',
      state: false
    },
    {
      name:'HIDRONEUMÁTICO',
      state: false
    },
    {
      name:'PLANTA DE EMERGENCIA',
      state: false
    },
    {
      name:'PARARRAYOS',
      state: false
    },
    {
      name:'CISTERNA',
      state: false
    },
    {
      name:'BOMBA DE AGUA',
      state: false
    },
    {
      name:'ÁREA CAMBIO DE ACEITE',
      state: false
    },
    {
      name:'BODEGA DE LUBRICANTES',
      state: false
    },
    {
      name:'ALMACÉN DE RESIDUOS PELIGROSOS',
      state: false
    }
  ];

  constructor() { }

  ngOnInit() {
    this.addProduct();
    this.addBotiquin();
  }

  addProduct(){
    this.arrayProduct.push({
      "value":'hdhdhdhdh',
    });
  }

  addBotiquin(){
    this.arrayBotiquin.push({
      "value":'hdhdhdhdh',
    });
  }

  addComunication(){
    this.arrayComunication.push({
      "value":" "
    })
  }

}
