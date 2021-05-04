import { E2AspectosService, Aspecto } from './../../../../services/e2-aspectos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {

  actividadId: string;
  aspecto: Aspecto = {
    act: '',
    F: 0,
    N: 0,
    M: 0,
    VT: 0,
    AAS: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private e2Service: E2AspectosService
  ) { }

  ngOnInit() {
    this.actividadId = this.activatedRoute.snapshot.paramMap.get('id');
    this.e2Service.getAspectosId(this.actividadId).subscribe((res: any) => {
      this.aspecto = res.aspectoFound;
      console.log(this.aspecto);
    });
  }

  aspectoUpdate() {
    const suma = this.aspecto.F + this.aspecto.N + this.aspecto.M;
    this.aspecto.VT = suma;
    this.e2Service.updateAspectosId(this.aspecto._id, {
      act: this.aspecto.act,
      F: this.aspecto.F,
      N: this.aspecto.N,
      M: this.aspecto.M,
      VT: this.aspecto.VT
    }).subscribe((res: any) => console.log(res));
  }
}
