import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstacionService } from 'src/app/services/estacion.service';
import { Cell, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-e3-requisitos-legales',
  templateUrl: './e3-requisitos-legales.page.html',
  styleUrls: ['./e3-requisitos-legales.page.scss'],
})
export class E3RequisitosLegalesPage implements OnInit {
  estacion:any={};

  tabla:any=[
    {
      col1:'LEY GENERAL DEL EQUILIBRIO ECOLOGICO Y PROTECCIÓN AL AMBIENTE',
      col2:'LICENCIA AMBIENTAL UNICA',
      col3:'Federal',
      col4:'109 BIS1 Y 111 BIS',
      col5:'DOFsr/148.pdf'
    },
    {
      col1:'REGLAMENTO DE LA LEY GENERAL DEL EQUILIBRIO ECOLOGICO Y LA PROTECCIÓN AL AMBIENTE EN MATERIA DE PREVENCIÓN Y CONTROL DE LA ATMOSFERA',
      col2:'LICENCIA AMBIENTAL UNICA',
      col3:'Federal',
      col4:'17 BIS',
      col5:'http://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LGEEPA_MPCCA_311014.pdf'
    },
    {
      col1:'LEY GENERAL DEL EQUILIBRIO ECOLOGICO Y PROTECCIÓN AL AMBIENTE',
      col2:'Impacto Ambiental',
      col3:'Federal',
      col4:'',
      col5:''
    },
    {
      col1:'DISPOCIÓN LEGISLATIVA "CARÁCTER GENERAL QUE ESTABLECE LOS LINEAMIENTOS PARA LA GESTIÓN INTEGRAL DE LOS RESIDUOS DE MANEJO ESPCIAL DEL SECTOR DE HIDROCARBUROS"',
      col2:'REGISTRO COMO GENERADOR DE RESIDUOS DE MANEJO ESPECIAL',
      col3:'Federal',
      col4:'DISPOSICIONES GENERALES',
      col5:'https://dof.gob.mx/nota_detalle.php?codigo=5459927&fecha=07/11/2016'
    },
    {
      col1:'NOM-005-ASEA-2016',
      col2:'CERTIFICADO DE LIMPIEZAS ECOLOGICAS',
      col3:'Federal',
      col4:'',
      col5:''
    },
    {
      col1:'NOM-005-ASEA-2016',
      col2:'MANIFIESTO DE DISPOSICIÓN DE RESIDUOS',
      col3:'Federal',
      col4:'',
      col5:''
    },
    {
      col1:'LEY DE HIDROCARBUROS',
      col2:'PERMISO DEL EXPENDIO AL PUBLICO',
      col3:'Federal',
      col4:'TITULO III, CAPITULO I, ART.50 Y 51',
      col5:'http://www.diputados.gob.mx/LeyesBiblio/pdf/LHidro_151116.pdf'
    },
    {
      col1:'LEY DE HIDROCARBUROS',
      col2:'POLIZA DE SEGURO ',
      col3:'Federal',
      col4:'TITULO III, CAPITULO I, ART,50, INCISO IV',
      col5:''
    },
    {
      col1:'NOM',
      col2:'Planos actualizados sellados con su respectivo oficio de Pemex',
      col3:'Federal',
      col4:'APARTADO V Y APARTADO VI',
      col5:''
    },
    {
      col1:'Reglamento Federal de Seguridad, Higiene y Medio Ambiente del Trabajo y NOM020',
      col2:'Registro de Compresor y por Unidad Verificadora',
      col3:'Federal',
      col4:'Art. 29,30 y 31 del Reglamento Federal de Seguridad, Higiene y Carpetas de las 13 Normas Medio Ambiente del Trabajo y NOM-020-STPS-2011',
      col5:''
    },
    {
      col1:'Reglamento Federal de Seguridad, Higiene y Medio Ambiente del Trabajo y NOM020',
      col2:'Carpetas de las 13 Normas',
      col3:'Federal',
      col4:'',
      col5:'http://www.stps.gob.mx/bp/secciones/dgsst/normatividad/n152.pdf'
    },
    {
      col1:'Ley del Seguro Social y Reglamento de la Ley del Seguro Social en Materia de Filiación',
      col2:'Registro Patrona',
      col3:'Federal',
      col4:'Art. 15, 72, 73, 75 de la Ley y Art 12-30 del Reglamento',
      col5:''
    },
    {
      col1:'NOM-022',
      col2:'Dictamen de Tierras Físicas',
      col3:'Federal',
      col4:'Cap 2, Secc 1 , Articulo 40 NOM, L.F.M.',
      col5:'http://www.imss.gob.mx/sites/all/statics/pdf/reglamentos/4046.pdf'
    },
    {
      col1:'NOM-025',
      col2:'Dictamen de Iluminación',
      col3:'Federal',
      col4:'Cap 2, Secc 1 , Articulo 40 NOM, L.F.M',
      col5:'http://dof.gob.mx/nota_detalle.php?codigo=5268977&fecha=18/09/2012'
    },
    {
      col1:'Código Administrativo del Estado de México y su Reglamento',
      col2:'Programa de Protección Civil Aprobado',
      col3:'Estatal',
      col4:'Libro Sexto en materia de Protección Civil Art. 6.17,6.18, 6.23 6.26 asi como Norma Técnica NTE-001-CGPC-2016',
      col5:'http://www.dof.gob.mx/normasOficiales/5805/salud3a11_C/salud3a11_C.html'
    },
    {
      col1:'MNX-EC-17025-IMNC-2006 ',
      col2:'Pruebas de Hermeticidad',
      col3:'Estatal',
      col4:'Cap 2, Secc 2 , Articulo 51,54 y 66, L.F.M',
      col5:'http://integra.cimav.edu.mx/intranet/data/files/calidad/documentos/externos/NMX-EC-17025-IMNC-2006.pdf'
    },
    {
      col1:'Ley Federal de Metrología y NormalizacionNOM-154-SCFI2005',
      col2:'Cartas Responsivas de Extintores y factura',
      col3:'Estatal',
      col4:'Art. 39, 40,46 y 47 de la LFMyN, asi como la NOM',
      col5:''
    },
    {
      col1:'Reglamento de construcción de inmuebles en construcción en condominio del estado de México',
      col2:'Dictamen de Seguridad Estructural',
      col3:'Estatal',
      col4:'Cap 2, art. 9, parrafo IX ',
      col5:''
    },
    {
      col1:'NOM-001-SEDE-2012',
      col2:'Dictamen Electrico',
      col3:'Estatal',
      col4:'Aplicable a todo la Normatividad',
      col5:'https://dof.gob.mx/nota_detalle_popup.php?codigo=5280607'
    },
    {
      col1:'Código Administrativo del Estado de México y Reglamento Orgánico Adm. De Naucalpan',
      col2:'Vo. Bo. De Protección Civil',
      col3:'Municipal',
      col4:'Art. 6.4 y 6.7 del CAEM y 13 y 48 del Reglamento de la Adm. De Naucalpan',
      col5:'https://naucalpan.gob.mx/wp-content/uploads/2019/01/codvig008.pdf'
    },
    {
      col1:'Reglamento de construcción de inmuebles en construcción en condominio del estado de México',
      col2:'Responsiva de Instalaciones Eléctricas',
      col3:'Municipal',
      col4:'Cap 2, art. 9, párrafo IX',
      col5:'https://dof.gob.mx/nota_detalle_popup.php?codigo=5280607'
    },
    {
      col1:'NOM-001-SEDE-2012 ',
      col2:'Constancia de Seguridad Estructural',
      col3:'Municipal',
      col4:'Aplicable a todo la Normatividad',
      col5:'https://legislacion.edomex.gob.mx/sites/legislacion.edomex.gob.mx/files/files/pdf/rgl/vig/rglvig107.pdf'
    },
    {
      col1:'Ley Orgánica de la Admin Publica EM, Código Administrativo del EM. Y Reglamento del Libro Quinto del EM',
      col2:'Impacto Urbano',
      col3:'Estatal',
      col4:'Art. 51, 52 53 de la Ley Orgánica, 5.5, 5.9, 5.35 y 5.35 del Código Administrativo y 2-6, 128, 129 del Reglamento del Libro Qunto',
      col5:''
    },
    {
      col1:'Código Administrativo del Estado de México y Reglamento de Salud del Estado de México',
      col2:'Licencia Sanitaria',
      col3:'Estatal',
      col4:'Art. 2.44, 2.46 y 2.47 del Código Adm del Estado de México y Titulo Cuarto del Reglamento de Salud E.M',
      col5:''
    },
    {
      col1:'Ley General de Equilibrio Ecológico y Protección al Ambiente, Código de Biodiversidad del E.M. Y Leo Orgánica Municipal',
      col2:'Licencia Ambiental',
      col3:'Municipal',
      col4:'Art. 4,8 y 10 de la LGEEyPA 1.1. 1.5, 1.6, 2.9 del Código de Biodiversidad y 49, 86 y 89 de la LOMEM',
      col5:'http://legislacion.edomex.gob.mx/sites/legislacion.edomex.gob.mx/files/files/pdf/cod/vig/codvig008.pdf'
    },
    {
      col1:'Reglamento del Servicio de Agua Potable, Drenaje, Alcantarillado y Aguas Residuales de Naucalpan',
      col2:'Registro de aguas Residuales',
      col3:'Municipal',
      col4:'Art. 125 y 126 de la Ley Orgánica Municipal y Art. 128 y 128 del Reglamento del Servicio de Agua de Naucalpan',
      col5:'http://www.conafor.gob.mx:8080/documentos/docs/4/321Ley%20de%20Desarrollo%20Forestal%20Sustentable%20del%20Estado%20de%20M%C3%A9xico.pdf'
    },
    {
      col1:'Reglamento de Unidades Económicas de Naucalpan y Ley de Competitividad y Ordenamiento Comercial del E.M',
      col2:'Licencia de Funcionamiento',
      col3:'Municipal',
      col4:'Art. 16-23 del Reglamento de Unidades Económicas y Art. 13 de la LCOCEM',
      col5:''
    },
    {
      col1:'Ley Orgánica Municipal del E.M., y Reglamento de Anuncios del Municipio de Naucalpan',
      col2:'Licencia de Anuncios',
      col3:'Municipal',
      col4:'Art. 31 de la Ley y Arts. 12-14, 48-57 del Reglamento de Anuncios',
      col5:''
    },
    {
      col1:'Código Administrativo del Estado de México y Reglamento Del Ordenamiento Territorial de los Asentamientos Humanos y Desarrollo Urbano.',
      col2:'Licencia de Construcción',
      col3:'Municipal',
      col4:'Art. 18.3, 18.6 y 18.20 del Código Administrativo y Artículo 88, 89, 90, 91, 92, 93, 94, Y 95 del Reglamento Del Ordenamiento Territorial de los Asentamientos Humanos y Desarrollo Urbano De Naucalpan',
      col5:''
    },
  ];

  constructor(
    private route:ActivatedRoute,
    private _estacion:EstacionService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    // console.log('Este es tu id',id);
    this.getEstacion(id);
  }

  getEstacion(id:string){
    this._estacion.getEstacionId(id).subscribe((data:any) =>{
      console.log(data);
      this.estacion = data;
    })
  }

  pdf(){
    const pdf = new PdfMakeWrapper();

    pdf.add(new Table([
      [
          new Cell(new Txt(`NOMBRE DE LA LEGISLACIÓN`).bold().fontSize(5).alignment('center').end).fillColor('#add9ea').end,
          new Cell(new Txt(`NOMBRE DEL REQUISITO`).bold().fontSize(5).end).fillColor('#add9ea').end,
          new Cell(new Txt(`DEPENDENCIA(FEDERAL, ESTATAL O MUNICIPAL)`).bold().fontSize(5).end).fillColor('#add9ea').end,
          new Cell(new Txt(`CLAUSULA Y ARTICULOS QUE APLICAN`).bold().fontSize(5).alignment('center').end).fillColor('#bce5cc').end,
          new Cell(new Txt(`Consultas`).bold().fontSize(5).end).fillColor('#add9ea').end
      ]
    ]).widths([250,160,130,110,100]).margin([0,10,0,0]).end)

    for (let index = 0; index < this.tabla.length; index++) { 
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.tabla[index].col1}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.tabla[index].col2}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.tabla[index].col3}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.tabla[index].col4}`).fontSize(8).end).end,
            new Cell(new Txt(`Consultar`).fontSize(8).link(`${this.tabla[index].col5}`).color('#0947f2').end).end
          ]
        ]).widths([250,160,130,110,100]).end
      );
    }
      
    pdf.pageMargins([20, 30, 30, 20]);
    pdf.pageOrientation('landscape');
    pdf.create().open(); 
  }


}
