import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  arrayComponents:any=[
    {
      componente:'COMPRESOR',
      checked:false
    },
    {
      componente:'HIDRONEUMÁTICO',
      checked:false
    },
    {
      componente:'PLANTA DE EMERGENCIA',
      checked:false
    },
    {
      componente:'PARARRAYOS',
      checked:false
    },
    {
      componente:'CISTERNA',
      checked:false
    },
    {
      componente:'BOMBA DE AGUA',
      checked:false
    },
    {
      componente:'ÁREA CAMBIO DE ACEITE',
      checked:false
    },
    {
      componente:'BODEGA DE LUBRICANTES',
      checked:false
    },
    {
      componente:'ALMACÉN DE RESIDUOS PELIGROSOS',
      checked:false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
