import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstacionService } from 'src/app/services/estacion.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-e5-carta-designacion',
  templateUrl: './e5-carta-designacion.page.html',
  styleUrls: ['./e5-carta-designacion.page.scss'],
})
export class E5CartaDesignacionPage implements OnInit {

  datosEstacion:any={};
  cp:any={};
  representante:any={};
  constructor(
    private route:ActivatedRoute,
    private _estacionServicio:EstacionService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    console.log(id,'Carta designacion');
    this.getEstacion(id);
  }

  getEstacion(id:string){
    this._estacionServicio.getEstacionId(id).subscribe((data:any) =>{
      console.log(data);
      this.datosEstacion = data;
      this.cp = data.cp;
      this.representante = data.idRepresentante;
      //console.log(this.datosEstacion.cp.ciudad);
      
    })
  }

  pdf(){
    const dd ={
      content:[
        {
          text: 'CARTA DE DESIGNACIÓN', bold: true, style: 'header', alignment: 'center', fontSize: 20
        },
        {
            text: `${this.datosEstacion.cp.ciudad} ,${this.datosEstacion.cp.estado}, {this.fechaActual.getFullYear()}`, alignment: 'right'
        },
        {
            text: `\n ${this.datosEstacion.idGerente.nombre} ${this.datosEstacion.idGerente.apellidos}`, fontSize: 10
        },
        {
          text: 'Encargado', fontSize: 10
        },
        {
          text: 'Presente. -', fontSize: 10
        },
        {
          text: `\nEn seguimiento al proceso de la Implementación del Sistema de Administración
                  de la Seguridad Industrial,Seguridad Operativa y Protección al medio Ambiente,
                  en la gasolinera ${this.datosEstacion.nombre}, ubicada en ${this.datosEstacion.calleNumero}, C.P. ${this.datosEstacion.cp.cp},
                  ${this.datosEstacion.cp.estado}, ${this.datosEstacion.cp.ciudad}, el que suscribe Roberto Muñoz Torres.
                  ${this.datosEstacion.idRepresentante.nombre} ${this.datosEstacion.idRepresentante.apellidos}, Representante Legal me permito hacer de su conocimiento que ha sido designado
                  Representante Técnico, para fungir como Representante de la Estación de Servicio
                  ante la ASEA, y para cumplir con lo siguiente:\n\n`, style: 'header', alignment: 'justify', fontSize: 10
        },
        {
          type: 'lower-alpha',
          ol: [
            'Asegurar que el SA es conforme con los requisitos establecidos en los lineamientos y demás normativa aplicable.',
            'Informar a la alta dirección de la Estación de Servicio acerca del desempeño del Sistema de Administración.',
            `Proponer la adopción de las mejores prácticas nacionales e internacionales en la implementación del
            Sistema de Administración.`,
            'Coordinar las acciones necesarias para subsanar los incumplimientos de la normatividad interna y externa aplicable.',
            `Informar a la Agencia de cualquier situación que pudiera poner en riesgo la seguridad Industrial,
            seguridad Operativa y Protección al Ambiente.`
          ], alignment: 'justify', fontSize: 10
        },
        {
          text: `\nPor lo anterior se le ha asignado el siguiente buzón de correo electrónico
                  {this.datos.correoElectronico}, el número de teléfono: {this.datos.telefono} y el domicilio
                  ubicado en {this.datos.calleNumero}, {this.datos.colonia}, {this.datos.cp} {this.datos.estado},
                  para oír y recibir notificaciones.\n`, alignment: 'justify', fontSize: 10
        },
        {
          text: `Sin más por el momento, no dudando que realizará las actividades asignadas de acuerdo a
                  su acostumbrado desempeño quedo de usted.`, fontSize: 10
        },
        {
          text: '\nAtentamente', alignment: 'center'
        },
        {
              text:`  {firmaEstacion}`,
              width: 150,
              height: 50,
              alignment:'center'        
            
        },
        {
          text: `{this.datos.maximaAutoridad}`, alignment: 'center'
        },
        {
          text: 'Representante Legal', alignment: 'center'
        }
    
      ]
    };

    pdfMake.createPdf(dd).open();
  }

}
