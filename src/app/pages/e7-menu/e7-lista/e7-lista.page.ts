import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { E7ListaService } from 'src/app/services/e7-lista.service';

@Component({
  selector: 'app-e7-lista',
  templateUrl: './e7-lista.page.html',
  styleUrls: ['./e7-lista.page.scss'],
})
export class E7ListaPage implements OnInit {

  datos2: any = {
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
    C29: false,
    C30: false,
    C31: false,
    C32: false,
    C33: false,
    C34: false,
    C35: false,
    C36: false,
    C37: false,
    C38: false,
    C39: false,
    C40: false,
    C41: false,
    C42: false,
  };

  datos: any = {
    C1: '',
    C2: '',
    C3: '',
    C4: '',
    C5: '',
    C6: '',
    C7: '',
    C8: '',
    C9: '',
    C10: '',
    C11: '',
    C12: '',
    C13: '',
    C14: '',
    C15: '',
    C16: '',
    C17: '',
    C18: '',
    C19: '',
    C20: '',
    C21: '',
    C22: '',
    C23: '',
    C24: '',
    C25: '',
    C26: '',
    C27: '',
    C28: '',
    C29: '',
    C30: '',
    C31: '',
    C32: '',
    C33: '',
    C34: '',
    C35: '',
    C36: '',
    C37: '',
    C38: '',
    C39: '',
    C40: '',
    C41: '',
    C42: '',
  };

  constructor(
    public toast: ToastController,
    private listaService: E7ListaService
  ) { this.getLista(); }

  ngOnInit() {
  }

  checar() {
    if (this.datos2.C1 === true) {
      this.datos.C1 = 'X';
    } else {
      this.datos.C1 = '';
    }
    if (this.datos2.C2 === true) {
      this.datos.C2 = 'X';
    } else {
      this.datos.C2 = '';
    }
    if (this.datos2.C3 === true) {
      this.datos.C3 = 'X';
    } else {
      this.datos.C3 = '';
    }
    if (this.datos2.C4 === true) {
      this.datos.C4 = 'X';
    } else {
      this.datos.C4 = '';
    }
    if (this.datos2.C5 === true) {
      this.datos.C5 = 'X';
    } else {
      this.datos.C5 = '';
    }
    if (this.datos2.C6 === true) {
      this.datos.C6 = 'X';
    } else {
      this.datos.C6 = '';
    }
    if (this.datos2.C7 === true) {
      this.datos.C7 = 'X';
    } else {
      this.datos.C7 = '';
    }
    if (this.datos2.C8 === true) {
      this.datos.C8 = 'X';
    } else {
      this.datos.C8 = '';
    }
    if (this.datos2.C9 === true) {
      this.datos.C9 = 'X';
    } else {
      this.datos.C9 = '';
    }
    if (this.datos2.C10 === true) {
      this.datos.C10 = 'X';
    } else {
      this.datos.C10 = '';
    }
    if (this.datos2.C11 === true) {
      this.datos.C11 = 'X';
    } else {
      this.datos.C11 = '';
    }
    if (this.datos2.C12 === true) {
      this.datos.C12 = 'X';
    } else {
      this.datos.C12 = '';
    }
    if (this.datos2.C13 === true) {
      this.datos.C13 = 'X';
    } else {
      this.datos.C13 = '';
    }
    if (this.datos2.C14 === true) {
      this.datos.C14 = 'X';
    } else {
      this.datos.C14 = '';
    }
    if (this.datos2.C15 === true) {
      this.datos.C15 = 'X';
    } else {
      this.datos.C15 = '';
    }
    if (this.datos2.C16 === true) {
      this.datos.C16 = 'X';
    } else {
      this.datos.C16 = '';
    }
    if (this.datos2.C17 === true) {
      this.datos.C17 = 'X';
    } else {
      this.datos.C17 = '';
    }
    if (this.datos2.C18 === true) {
      this.datos.C18 = 'X';
    } else {
      this.datos.C18 = '';
    }
    if (this.datos2.C19 === true) {
      this.datos.C19 = 'X';
    } else {
      this.datos.C19 = '';
    }
    if (this.datos2.C20 === true) {
      this.datos.C20 = 'X';
    } else {
      this.datos.C20 = '';
    }
    if (this.datos2.C21 === true) {
      this.datos.C21 = 'X';
    } else {
      this.datos.C21 = '';
    }
    if (this.datos2.C22 === true) {
      this.datos.C22 = 'X';
    } else {
      this.datos.C22 = '';
    }
    if (this.datos2.C23 === true) {
      this.datos.C23 = 'X';
    } else {
      this.datos.C23 = '';
    }
    if (this.datos2.C24 === true) {
      this.datos.C24 = 'X';
    } else {
      this.datos.C24 = '';
    }
    if (this.datos2.C25 === true) {
      this.datos.C25 = 'X';
    } else {
      this.datos.C25 = '';
    }
    if (this.datos2.C26 === true) {
      this.datos.C26 = 'X';
    } else {
      this.datos.C26 = '';
    }
    if (this.datos2.C27 === true) {
      this.datos.C27 = 'X';
    } else {
      this.datos.C27 = '';
    }
    if (this.datos2.C28 === true) {
      this.datos.C28 = 'X';
    } else {
      this.datos.C28 = '';
    }
    if (this.datos2.C29 === true) {
      this.datos.C29 = 'X';
    } else {
      this.datos.C29 = '';
    }
    if (this.datos2.C30 === true) {
      this.datos.C30 = 'X';
    } else {
      this.datos.C30 = '';
    }
    if (this.datos2.C31 === true) {
      this.datos.C31 = 'X';
    } else {
      this.datos.C31 = '';
    }
    if (this.datos2.C32 === true) {
      this.datos.C32 = 'X';
    } else {
      this.datos.C32 = '';
    }
    if (this.datos2.C33 === true) {
      this.datos.C33 = 'X';
    } else {
      this.datos.C33 = '';
    }
    if (this.datos2.C34 === true) {
      this.datos.C34 = 'X';
    } else {
      this.datos.C34 = '';
    }
    if (this.datos2.C35 === true) {
      this.datos.C35 = 'X';
    } else {
      this.datos.C35 = '';
    }
    if (this.datos2.C36 === true) {
      this.datos.C36 = 'X';
    } else {
      this.datos.C36 = '';
    }
    if (this.datos2.C37 === true) {
      this.datos.C37 = 'X';
    } else {
      this.datos.C37 = '';
    }
    if (this.datos2.C38 === true) {
      this.datos.C38 = 'X';
    } else {
      this.datos.C38 = '';
    }
    if (this.datos2.C39 === true) {
      this.datos.C39 = 'X';
    } else {
      this.datos.C39 = '';
    }
    if (this.datos2.C40 === true) {
      this.datos.C40 = 'X';
    } else {
      this.datos.C40 = '';
    }
    if (this.datos2.C41 === true) {
      this.datos.C41 = 'X';
    } else {
      this.datos.C41 = '';
    }
    if (this.datos2.C42 === true) {
      this.datos.C42 = 'X';
    } else {
      this.datos.C42 = '';
    }
  }

  getLista() {
    this.listaService.getLista().subscribe((data: any) => {
      console.log(data.riesgos[data.riesgos.length - 1]);
      this.datos = data.riesgos[data.riesgos.length - 1];
    });
  }

  async guardar() {
    const toast = await this.toast.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();

    this.listaService.postLista(this.datos).subscribe(data => {
      console.log(data);
    });
  }

}
