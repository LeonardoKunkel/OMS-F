import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { E2AspectosService } from 'src/app/services/e2-aspectos.service';

@Component({
  selector: 'app-e2-aspectos',
  templateUrl: './e2-aspectos.page.html',
  styleUrls: ['./e2-aspectos.page.scss'],
})
export class E2AspectosPage implements OnInit {

  datos: any = {
    F1: '',
    F2: '',
    F3: '',
    F4: '',
    F5: '',
    F6: '',
    F7: '',
    F8: '',
    F9: '',
    F10: '',
    F11: '',
    F12: '',
    F13: '',
    F14: '',
    F15: '',
    F16: '',
    F17: '',
    F18: '',
    F19: '',
    F20: '',
    F21: '',
    F22: '',
    F23: '',
    F24: '',
    F25: '',
    F26: '',
    F27: '',
    F28: '',
    F29: '',
    F30: '',
    F31: '',
    F32: '',
    F33: '',
    F34: '',
    F35: '',
    F36: '',
    F37: '',
    F38: '',
    F39: '',
    N1: '',
    N2: '',
    N3: '',
    N4: '',
    N5: '',
    N6: '',
    N7: '',
    N8: '',
    N9: '',
    N10: '',
    N11: '',
    N12: '',
    N13: '',
    N14: '',
    N15: '',
    N16: '',
    N17: '',
    N18: '',
    N19: '',
    N20: '',
    N21: '',
    N22: '',
    N23: '',
    N24: '',
    N25: '',
    N26: '',
    N27: '',
    N28: '',
    N29: '',
    N30: '',
    N31: '',
    N32: '',
    N33: '',
    N34: '',
    N35: '',
    N36: '',
    N37: '',
    N38: '',
    N39: '',
    M1: '',
    M2: '',
    M3: '',
    M4: '',
    M5: '',
    M6: '',
    M7: '',
    M8: '',
    M9: '',
    M10: '',
    M11: '',
    M12: '',
    M13: '',
    M14: '',
    M15: '',
    M16: '',
    M17: '',
    M18: '',
    M19: '',
    M20: '',
    M21: '',
    M22: '',
    M23: '',
    M24: '',
    M25: '',
    M26: '',
    M27: '',
    M28: '',
    M29: '',
    M30: '',
    M31: '',
    M32: '',
    M33: '',
    M34: '',
    M35: '',
    M36: '',
    M37: '',
    M38: '',
    M39: '',
    VT1: '',
    VT2: '',
    VT3: '',
    VT4: '',
    VT5: '',
    VT6: '',
    VT7: '',
    VT8: '',
    VT9: '',
    VT10: '',
    VT11: '',
    VT12: '',
    VT13: '',
    VT14: '',
    VT15: '',
    VT16: '',
    VT17: '',
    VT18: '',
    VT19: '',
    VT20: '',
    VT21: '',
    VT22: '',
    VT23: '',
    VT24: '',
    VT25: '',
    VT26: '',
    VT27: '',
    VT28: '',
    VT29: '',
    VT30: '',
    VT31: '',
    VT32: '',
    VT33: '',
    VT34: '',
    VT35: '',
    VT36: '',
    VT37: '',
    VT38: '',
    VT39: '',
    AAS1: '',
    AAS2: '',
    AAS3: '',
    AAS4: '',
    AAS5: '',
    AAS6: '',
    AAS7: '',
    AAS8: '',
    AAS9: '',
    AAS10: '',
    AAS11: '',
    AAS12: '',
    AAS13: '',
    AAS14: '',
    AAS15: '',
    AAS16: '',
    AAS17: '',
    AAS18: '',
    AAS19: '',
    AAS20: '',
    AAS21: '',
    AAS22: '',
    AAS23: '',
    AAS24: '',
    AAS25: '',
    AAS26: '',
    AAS27: '',
    AAS28: '',
    AAS29: '',
    AAS30: '',
    AAS31: '',
    AAS32: '',
    AAS33: '',
    AAS34: '',
    AAS35: '',
    AAS36: '',
    AAS37: '',
    AAS38: '',
    AAS39: '',
  };

  constructor(
    public toast: ToastController,
    private aspectosService: E2AspectosService
  ) { }

  ngOnInit() {
  }

  getAspectos() {
    this.aspectosService.getAspectos().subscribe((data: any) => {
      console.log(data.riesgos[data.riesgos.length - 1]);
      this.datos = data.riesgos[data.riesgos.length - 1];
    });
  }

  async enviarForm(formulario) {

    const toast = await this.toast.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();

    const valortotal1 = this.datos.F1 + this.datos.N1 + this.datos.M1;
    this.datos.VT1 = valortotal1;
    const valortotal2 = this.datos.F2 + this.datos.N2 + this.datos.M2;
    this.datos.VT2 = valortotal2;
    const valortotal3 = this.datos.F3 + this.datos.N3 + this.datos.M3;
    this.datos.VT3 = valortotal3;
    const valortotal4 = this.datos.F4 + this.datos.N4 + this.datos.M4;
    this.datos.VT4 = valortotal4;
    const valortotal5 = this.datos.F5 + this.datos.N5 + this.datos.M5;
    this.datos.VT5 = valortotal5;
    const valortotal6 = this.datos.F6 + this.datos.N6 + this.datos.M6;
    this.datos.VT6 = valortotal6;
    const valortotal7 = this.datos.F7 + this.datos.N7 + this.datos.M7;
    this.datos.VT7 = valortotal7;
    const valortotal8 = this.datos.F8 + this.datos.N8 + this.datos.M8;
    this.datos.VT8 = valortotal8;
    const valortotal9 = this.datos.F9 + this.datos.N9 + this.datos.M9;
    this.datos.VT9 = valortotal9;
    const valortotal10 = this.datos.F10 + this.datos.N10 + this.datos.M10;
    this.datos.VT10 = valortotal10;
    const valortotal11 = this.datos.F11 + this.datos.N11 + this.datos.M11;
    this.datos.VT11 = valortotal11;
    const valortotal12 = this.datos.F12 + this.datos.N12 + this.datos.M12;
    this.datos.VT12 = valortotal12;
    const valortotal13 = this.datos.F13 + this.datos.N13 + this.datos.M13;
    this.datos.VT13 = valortotal13;
    const valortotal14 = this.datos.F14 + this.datos.N14 + this.datos.M14;
    this.datos.VT14 = valortotal14;
    const valortotal15 = this.datos.F15 + this.datos.N15 + this.datos.M15;
    this.datos.VT15 = valortotal15;
    const valortotal16 = this.datos.F16 + this.datos.N16 + this.datos.M16;
    this.datos.VT16 = valortotal16;
    const valortotal17 = this.datos.F17 + this.datos.N17 + this.datos.M17;
    this.datos.VT17 = valortotal17;
    const valortotal18 = this.datos.F18 + this.datos.N18 + this.datos.M18;
    this.datos.VT18 = valortotal18;
    const valortotal19 = this.datos.F19 + this.datos.N19 + this.datos.M19;
    this.datos.VT19 = valortotal19;
    const valortotal20 = this.datos.F20 + this.datos.N20 + this.datos.M20;
    this.datos.VT20 = valortotal20;
    const valortotal21 = this.datos.F21 + this.datos.N21 + this.datos.M21;
    this.datos.VT21 = valortotal21;
    const valortotal22 = this.datos.F22 + this.datos.N22 + this.datos.M22;
    this.datos.VT22 = valortotal22;
    const valortotal23 = this.datos.F23 + this.datos.N23 + this.datos.M23;
    this.datos.VT23 = valortotal23;
    const valortotal24 = this.datos.F24 + this.datos.N24 + this.datos.M24;
    this.datos.VT24 = valortotal24;
    const valortotal25 = this.datos.F25 + this.datos.N25 + this.datos.M25;
    this.datos.VT25 = valortotal25;
    const valortotal26 = this.datos.F26 + this.datos.N26 + this.datos.M26;
    this.datos.VT26 = valortotal26;
    const valortotal27 = this.datos.F27 + this.datos.N27 + this.datos.M27;
    this.datos.VT27 = valortotal27;
    const valortotal28 = this.datos.F28 + this.datos.N28 + this.datos.M28;
    this.datos.VT28 = valortotal28;
    const valortotal29 = this.datos.F29 + this.datos.N29 + this.datos.M29;
    this.datos.VT29 = valortotal29;
    const valortotal30 = this.datos.F30 + this.datos.N30 + this.datos.M30;
    this.datos.VT30 = valortotal30;
    const valortotal31 = this.datos.F31 + this.datos.N31 + this.datos.M31;
    this.datos.VT31 = valortotal31;
    const valortotal32 = this.datos.F32 + this.datos.N32 + this.datos.M32;
    this.datos.VT32 = valortotal32;
    const valortotal33 = this.datos.F33 + this.datos.N33 + this.datos.M33;
    this.datos.VT33 = valortotal33;
    const valortotal34 = this.datos.F34 + this.datos.N34 + this.datos.M34;
    this.datos.VT34 = valortotal34;
    const valortotal35 = this.datos.F35 + this.datos.N35 + this.datos.M35;
    this.datos.VT35 = valortotal35;
    const valortotal36 = this.datos.F36 + this.datos.N36 + this.datos.M36;
    this.datos.VT36 = valortotal36;
    const valortotal37 = this.datos.F37 + this.datos.N37 + this.datos.M37;
    this.datos.VT37 = valortotal37;
    const valortotal38 = this.datos.F38 + this.datos.N38 + this.datos.M38;
    this.datos.VT38 = valortotal38;
    const valortotal39 = this.datos.F39 + this.datos.N39 + this.datos.M39;
    this.datos.VT39 = valortotal39;

    const conteo = [
      valortotal1,
      valortotal2,
      valortotal3,
      valortotal4,
      valortotal5,
      valortotal6,
      valortotal7,
      valortotal8,
      valortotal9,
      valortotal10,
      valortotal11,
      valortotal12,
      valortotal13,
      valortotal14,
      valortotal15,
      valortotal16,
      valortotal17,
      valortotal18,
      valortotal19,
      valortotal20,
      valortotal21,
      valortotal22,
      valortotal23,
      valortotal24,
      valortotal25,
      valortotal26,
      valortotal27,
      valortotal28,
      valortotal29,
      valortotal30,
      valortotal31,
      valortotal32,
      valortotal33,
      valortotal34,
      valortotal35,
      valortotal36,
      valortotal37,
      valortotal38,
      valortotal39,
    ];

    const top12 = conteo.sort(function (a, b) { return b - a; }).slice(0, 12);
    console.log(top12);
    const ultimo = top12[top12.length - 1];
    console.log(ultimo);

    const aspectoSig1 = valortotal1 >= ultimo ? 'Si' : 'No';
    this.datos.AAS1 = aspectoSig1;
    const aspectoSig2 = valortotal2 >= ultimo ? 'Si' : 'No';
    this.datos.AAS2 = aspectoSig2;
    const aspectoSig3 = valortotal3 >= ultimo ? 'Si' : 'No';
    this.datos.AAS3 = aspectoSig3;
    const aspectoSig4 = valortotal4 >= ultimo ? 'Si' : 'No';
    this.datos.AAS4 = aspectoSig4;
    const aspectoSig5 = valortotal5 >= ultimo ? 'Si' : 'No';
    this.datos.AAS5 = aspectoSig5;
    const aspectoSig6 = valortotal6 >= ultimo ? 'Si' : 'No';
    this.datos.AAS6 = aspectoSig6;
    const aspectoSig7 = valortotal7 >= ultimo ? 'Si' : 'No';
    this.datos.AAS7 = aspectoSig7;
    const aspectoSig8 = valortotal8 >= ultimo ? 'Si' : 'No';
    this.datos.AAS8 = aspectoSig8;
    const aspectoSig9 = valortotal9 >= ultimo ? 'Si' : 'No';
    this.datos.AAS9 = aspectoSig9;
    const aspectoSig10 = valortotal10 >= ultimo ? 'Si' : 'No';
    this.datos.AAS10 = aspectoSig10;
    const aspectoSig11 = valortotal11 >= ultimo ? 'Si' : 'No';
    this.datos.AAS11 = aspectoSig11;
    const aspectoSig12 = valortotal12 >= ultimo ? 'Si' : 'No';
    this.datos.AAS12 = aspectoSig12;
    const aspectoSig13 = valortotal13 >= ultimo ? 'Si' : 'No';
    this.datos.AAS13 = aspectoSig13;
    const aspectoSig14 = valortotal14 >= ultimo ? 'Si' : 'No';
    this.datos.AAS14 = aspectoSig14;
    const aspectoSig15 = valortotal15 >= ultimo ? 'Si' : 'No';
    this.datos.AAS15 = aspectoSig15;
    const aspectoSig16 = valortotal16 >= ultimo ? 'Si' : 'No';
    this.datos.AAS16 = aspectoSig16;
    const aspectoSig17 = valortotal17 >= ultimo ? 'Si' : 'No';
    this.datos.AAS17 = aspectoSig17;
    const aspectoSig18 = valortotal18 >= ultimo ? 'Si' : 'No';
    this.datos.AAS18 = aspectoSig18;
    const aspectoSig19 = valortotal19 >= ultimo ? 'Si' : 'No';
    this.datos.AAS19 = aspectoSig19;
    const aspectoSig20 = valortotal20 >= ultimo ? 'Si' : 'No';
    this.datos.AAS20 = aspectoSig20;
    const aspectoSig21 = valortotal21 >= ultimo ? 'Si' : 'No';
    this.datos.AAS21 = aspectoSig21;
    const aspectoSig22 = valortotal22 >= ultimo ? 'Si' : 'No';
    this.datos.AAS22 = aspectoSig22;
    const aspectoSig23 = valortotal23 >= ultimo ? 'Si' : 'No';
    this.datos.AAS23 = aspectoSig23;
    const aspectoSig24 = valortotal24 >= ultimo ? 'Si' : 'No';
    this.datos.AAS24 = aspectoSig24;
    const aspectoSig25 = valortotal25 >= ultimo ? 'Si' : 'No';
    this.datos.AAS25 = aspectoSig25;
    const aspectoSig26 = valortotal26 >= ultimo ? 'Si' : 'No';
    this.datos.AAS26 = aspectoSig26;
    const aspectoSig27 = valortotal27 >= ultimo ? 'Si' : 'No';
    this.datos.AAS27 = aspectoSig27;
    const aspectoSig28 = valortotal28 >= ultimo ? 'Si' : 'No';
    this.datos.AAS28 = aspectoSig28;
    const aspectoSig29 = valortotal29 >= ultimo ? 'Si' : 'No';
    this.datos.AAS29 = aspectoSig29;
    const aspectoSig30 = valortotal30 >= ultimo ? 'Si' : 'No';
    this.datos.AAS30 = aspectoSig30;
    const aspectoSig31 = valortotal31 >= ultimo ? 'Si' : 'No';
    this.datos.AAS31 = aspectoSig31;
    const aspectoSig32 = valortotal32 >= ultimo ? 'Si' : 'No';
    this.datos.AAS32 = aspectoSig32;
    const aspectoSig33 = valortotal33 >= ultimo ? 'Si' : 'No';
    this.datos.AAS33 = aspectoSig33;
    const aspectoSig34 = valortotal34 >= ultimo ? 'Si' : 'No';
    this.datos.AAS34 = aspectoSig34;
    const aspectoSig35 = valortotal35 >= ultimo ? 'Si' : 'No';
    this.datos.AAS35 = aspectoSig35;
    const aspectoSig36 = valortotal36 >= ultimo ? 'Si' : 'No';
    this.datos.AAS36 = aspectoSig36;
    const aspectoSig37 = valortotal37 >= ultimo ? 'Si' : 'No';
    this.datos.AAS37 = aspectoSig37;
    const aspectoSig38 = valortotal38 >= ultimo ? 'Si' : 'No';
    this.datos.AAS38 = aspectoSig38;
    const aspectoSig39 = valortotal39 >= ultimo ? 'Si' : 'No';
    this.datos.AAS39 = aspectoSig39;

    this.aspectosService.postAspectos(this.datos).subscribe(data => {
      console.log(data);
    });
  }

}
