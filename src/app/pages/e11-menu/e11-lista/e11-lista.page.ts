import { EstacionService } from './../../../services/estacion.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { E11EquipoCriticoService } from 'src/app/services/e11-equipo-critico.service';

@Component({
  selector: 'app-e11-lista',
  templateUrl: './e11-lista.page.html',
  styleUrls: ['./e11-lista.page.scss'],
})
export class E11ListaPage implements OnInit {

  listaEquipos:any=[
    {
      tipo:'Tanque horizontal',
      clave:1,
      desc:'Almacenamiento de gasolina',
      producto:[
        'MAGNA'
      ]
    },
    {
      tipo:'Tanque horizontal',
      clave:2,
      desc:'Almacenamiento de Gasolina',
      producto:[
        'PREMIUM'
      ]
    },
    {
      tipo:'Tanque horizontal',
      clave:3,
      desc:'Almacenamiento de Gasolina',
      producto:[
        'DIESEL'
      ]
    },
    {
      tipo:'Dispensario',
      clave:1,
      desc:'Despacho de producto a vehículos',
      producto:[
        'MG',
        'PR',
        'DL'
      ]
    },
    {
      tipo:'Dispensario',
      clave:2,
      desc:'Despacho de producto a vehículos',
      producto:[
        'MG',
        'PR',
        'DL'
      ]
    },
    {
      tipo:'Dispensario',
      clave:3,
      desc:'Despacho de producto a vehículos',
      producto:[
        'MG',
        'PR'
      ]
    },
    {
      tipo:'Dispensario',
      clave:4,
      desc:'Despacho de producto a vehículos',
      producto:[
        'MG',
        'PR'
      ]
    },
    {
      tipo:'Dispensario',
      clave:5,
      desc:'Despacho de producto a vehículos',
      producto:[
        'MG',
        'PR'
      ]
    },
    {
      tipo:'Extintores',
      clave:'S/N',
      desc:'Protección C.I.',
      producto:[

      ]
    },
    {
      tipo:'Válvula presión -vacío',
      clave:'S/N',
      desc:'Retención -expulsión vapores de gasolina',
      producto:[
        'MAGNA'
      ]
    },
    {
      tipo:'Válvula presión -vacío',
      clave:'S/N',
      desc:'Retención -expulsión de vapores de gasolina',
      producto:[
        'PREMIUM'
      ]
    },
    {
      tipo:'Arrestador de flama',
      clave:'S/N',
      desc:'Retención de flama',
      producto:[

      ]
    },
    {
      tipo:'Pozos de observación',
      clave:'S/N',
      desc:'Monitoreo de fugas',
      producto:[

      ]
    },
    {
      tipo:'Drenajes',
      clave:'S/N',
      desc:'Contención y conducción de agua aceitosa',
      producto:[

      ]
    },
    {
      tipo:'Trampa de combustible',
      clave:'S/N',
      desc:'Contención y separación de productos con agua.',
      producto:[

      ]
    },
    {
      tipo:'Tierras y pararrayos',
      clave:'S/N',
      desc:'Disipación de cargas estáticas y atmosféricas',
      producto:[

      ]
    },
    {
      tipo:'Paros de emergencia',
      clave:'S/N',
      desc:'Paro de la operación',
      producto:[

      ]
    },
    {
      tipo:'Transformador',
      clave:'S/N',
      desc:'Regulación de energía eléctrica',
      producto:[

      ]
    },
    {
      tipo:'Motobomba',
      clave:'S/N',
      desc:'Transporte de producto hacia dispensarios',
      producto:[
        'MAGNA'
      ]
    },
    {
      tipo:'Motobomba',
      clave:'S/N',
      desc:'Transporte de producto hacia dispensarios',
      producto:[
        'PREMIUM'
      ]
    },
    {
      tipo:'Motobomba',
      clave:'S/N',
      desc:'Transporte de producto hacia dispensarios',
      producto:[
        'DIÉSEL'
      ]
    },
    {
      tipo:'Control de inventarios',
      clave:'S/N',
      desc:'Medición de nivel de producto en tanques ',
      producto:[

      ]
    },
    {
      tipo:'Tubería de venteo',
      clave:'S/N',
      desc:'Venteo de vapores de gasolina',
      producto:[
        'MAGNA'
      ]
    },
    {
      tipo:'Tubería de venteo',
      clave:'S/N',
      desc:'Tubería',
      producto:[
        'PREMIUM'
      ]
    },
    {
      tipo:'Tubería de venteo',
      clave:'S/N',
      desc:'Tubería',
      producto:[
        'DIÉSEL'
      ]
    },
    {
      tipo:'Sensores de fugas',
      clave:'S/N',
      desc:'Detección de fugas de producto en tanques y accesorios',
      producto:[

      ]
    },
    {
      tipo:'Control de alarmas',
      clave:'S/N',
      desc:'Aviso de fuga en tanques y contenedores.',
      producto:[
        
      ]
    },
    {
      tipo:'Tablero de control eléctrico',
      clave:'S/N',
      desc:'Control de suministro de e.e., arranque y paro de bombas',
      producto:[

      ]
    },
    {
      tipo:'Canalización eléctrica',
      clave:'S/N',
      desc:'Protección al cableado conductor de energía eléctrica.',
      producto:[
      ]
    }
  ];

  DataEstacion: any = {};

  datos: any = {
    C1: false,
    C2: false,
    C3: false,
    C4: false,
    C5: false,
    C6: false,
    C7: false,
    C8: false,
    C9: false,
    C10: false,
    C11: false,
    C12: false,
    C13: false,
    C14: false,
    C15: false,
    C16: false,
    C17: false,
    C18: false,
    C19: false,
    C20: false,
    C21: false,
    C22: false,
    C23: false,
    C24: false,
    C25: false,
    C26: false,
    C27: false,
    C28: false,
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    num5: 0,
    num6: 0,
    num7: 0,
    num8: 0,
    num9: 0,
    num10: 0,
    num11: 0,
    num12: 0,
    num13: 0,
    num14: 0,
    num15: 0,
    num16: 0,
    num17: 0,
    num18: 0,
  };

  datosm: any = {
    check1: '',
    check2: '',
    check3: '',
    check4: '',
    check5: '',
    check6: '',
    check7: '',
    check8: '',
    check9: '',
    check10: '',
    check11: '',
    check12: '',
    check13: '',
    check14: '',
    check15: '',
    check16: '',
    check17: '',
    check18: '',
    check19: '',
    check20: '',
    check21: '',
    check22: '',
    check23: '',
    check24: '',
    check25: '',
    check26: '',
    check27: '',
    check28: '',
  };

  constructor(
    public toast: ToastController,
    private eqCrit: E11EquipoCriticoService,
    private estacionService: EstacionService,
    private route: ActivatedRoute,
  )
  {
    this.checar();
    // this.getOnce();
  }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('custom_id');
    // this.getEstacion(id);
  }

  // getEstacion(id: string){
  //   this.estacionService.getEstacionId(id).subscribe((data: any) => {
  //     console.log(data);
  //     this.DataEstacion = data;
  //   });
  // }

  // getOnce() {
  //   this.eqCrit.getEquipoCrit().subscribe((data: any) => {
  //     console.log(data.equipoCritico[data.equipoCritico - 1]);
  //     this.datos = data.equipoCritico[data.equipoCritico - 1];
  //   });
  // }

  async guardar() {
    // this.getOnce();
    this.checar();
    const toast = await this.toast.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();

    this.eqCrit.postEquipoCrit(this.datos).subscribe(data => {
      console.log(data);
    });
  }

  checar() {
    if (this.datos.check1 === true) {
      this.datosm.check1 = 'X';
    } else {
      this.datosm.check1 = '';
    }
    if (this.datos.check2 === true) {
      this.datosm.check2 = 'X';
    } else {
      this.datosm.check2 = '';
    }
    if (this.datos.check3 === true) {
      this.datosm.check3 = 'X';
    } else {
      this.datosm.check3 = '';
    }
    if (this.datos.check4 === true) {
      this.datosm.check4 = 'X';
    } else {
      this.datosm.check4 = '';
    }
    if (this.datos.check5 === true) {
      this.datosm.check5 = 'X';
    } else {
      this.datosm.check5 = '';
    }
    if (this.datos.check6 === true) {
      this.datosm.check6 = 'X';
    } else {
      this.datosm.check6 = '';
    }
    if (this.datos.check7 === true) {
      this.datosm.check7 = 'X';
    } else {
      this.datosm.check7 = '';
    }
    if (this.datos.check8 === true) {
      this.datosm.check8 = 'X';
    } else {
      this.datosm.check8 = '';
    }
    if (this.datos.check9 === true) {
      this.datosm.check9 = 'X';
    } else {
      this.datosm.check9 = '';
    }
    if (this.datos.check10 === true) {
      this.datosm.check10 = 'X';
    } else {
      this.datosm.check10 = '';
    }
    if (this.datos.check11 === true) {
      this.datosm.check11 = 'X';
    } else {
      this.datosm.check11 = '';
    }
    if (this.datos.check12 === true) {
      this.datosm.check12 = 'X';
    } else {
      this.datosm.check12 = '';
    }
    if (this.datos.check13 === true) {
      this.datosm.check13 = 'X';
    } else {
      this.datosm.check13 = '';
    }
    if (this.datos.check14 === true) {
      this.datosm.check14 = 'X';
    } else {
      this.datosm.check14 = '';
    }
    if (this.datos.check15 === true) {
      this.datosm.check15 = 'X';
    } else {
      this.datosm.check15 = '';
    }
    if (this.datos.check16 === true) {
      this.datosm.check16 = 'Aplica';
    } else {
      this.datosm.check16 = 'No Aplica';
    }
    if (this.datos.check17 === true) {
      this.datosm.check17 = 'Aplica';
    } else {
      this.datosm.check17 = 'No Aplica';
    }
    if (this.datos.check18 === true) {
      this.datosm.check18 = 'Aplica';
    } else {
      this.datosm.check18 = 'No Aplica';
    }
    if (this.datos.check19 === true) {
      this.datosm.check19 = 'Aplica';
    } else {
      this.datosm.check19 = 'No Aplica';
    }
    if (this.datos.check20 === true) {
      this.datosm.check20 = 'Aplica';
    } else {
      this.datosm.check20 = 'No Aplica';
    }
    if (this.datos.check21 === true) {
      this.datosm.check21 = 'Aplica';
    } else {
      this.datosm.check21 = 'No Aplica';
    }
    if (this.datos.check22 === true) {
      this.datosm.check22 = 'Aplica';
    } else {
      this.datosm.check22 = 'No Aplica';
    }
    if (this.datos.check23 === true) {
      this.datosm.check23 = 'Aplica';
    } else {
      this.datosm.check23 = 'No Aplica';
    }
    if (this.datos.check24 === true) {
      this.datosm.check24 = 'Aplica';
    } else {
      this.datosm.check24 = 'No Aplica';
    }
    if (this.datos.check25 === true) {
      this.datosm.check25 = 'Aplica';
    } else {
      this.datosm.check25 = 'No Aplica';
    }
    if (this.datos.check26 === true) {
      this.datosm.check26 = 'Aplica';
    } else {
      this.datosm.check26 = 'No Aplica';
    }
    if (this.datos.check27 === true) {
      this.datosm.check27 = 'Aplica';
    } else {
      this.datosm.check27 = 'No Aplica';
    }
    if (this.datos.check28 === true) {
      this.datosm.check28 = 'Aplica';
    } else {
      this.datosm.check28 = 'No Aplica';
    }
    if (this.datos.num1 === '') {
      this.datosm.num1 = 0;
    }
    if (this.datos.num2 === '') {
      this.datosm.num2 = 0;
    }
    if (this.datos.num3 === '') {
      this.datosm.num3 = 0;
    }
    if (this.datos.num4 === '') {
      this.datosm.num4 = 0;
    }
    if (this.datos.num5 === '') {
      this.datosm.num5 = 0;
    }
    if (this.datos.num6 === '') {
      this.datosm.num6 = 0;
    }
    if (this.datos.num7 === '') {
      this.datosm.num7 = 0;
    }
    if (this.datos.num8 === '') {
      this.datosm.num8 = 0;
    }
    if (this.datos.num9 === '') {
      this.datosm.num9 = 0;
    }
    if (this.datos.num10 === '') {
      this.datosm.num10 = 0;
    }
    if (this.datos.num11 === '') {
      this.datosm.num11 = 0;
    }
    if (this.datos.num12 === '') {
      this.datosm.num12 = 0;
    }
    if (this.datos.num13 === '') {
      this.datosm.num13 = 0;
    }
    if (this.datos.num14 === '') {
      this.datosm.num14 = 0;
    }
    if (this.datos.num15 === '') {
      this.datosm.num15 = 0;
    }
    if (this.datos.num16 === '') {
      this.datosm.num16 = 0;
    }
    if (this.datos.num17 === '') {
      this.datosm.num17 = 0;
    }
    if (this.datos.num18 === '') {
      this.datosm.num18 = 0;
    }
  }

}
