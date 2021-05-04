import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Personal, PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  datos: Personal = {
    _id: '',
    nombre: '',
    apellido: '',
    telefono: 0,
    correo: '',
    puesto: ''
  }

  editing: boolean = false;

  constructor(
    private _personal: PersonalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('id')) {
        this.editing = true;
        this._personal
          .getPostById(paramMap.get('id'))
          .subscribe((res: any) => {
            this.datos = res.registerFound;
            console.log(this.datos);
          });
      }
      
    })
  }

  addPersonal( ) {
    this._personal.postPersonal(this.datos).subscribe((data: any) => {
      this.router.navigate(['/tabs/tab2']);
    });
  }

  updatePersonal() {
    console.log(this.datos._id);
    
    this._personal.updatePersonalById(this.datos._id, {
      nombre: this.datos.nombre,
      apellido: this.datos.apellido,
      telefono: this.datos.telefono,
      correo: this.datos.correo,
      puesto: this.datos.puesto
    }).subscribe( res => {
      this.router.navigate(['/tabs/tab2']);
    });
  }
}
