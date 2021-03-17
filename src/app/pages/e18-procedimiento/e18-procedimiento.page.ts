import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Txt, Table, Cell, Img } from 'pdfmake-wrapper';

@Component({
  selector: 'app-e18-procedimiento',
  templateUrl: './e18-procedimiento.page.html',
  styleUrls: ['./e18-procedimiento.page.scss'],
})
export class E18ProcedimientoPage implements OnInit {

  art={
    codigo:null,
    descripcion:null,
    precio:null
  }

  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
               {codigo:2, descripcion:'manzanas', precio:12.10},
               {codigo:3, descripcion:'melon', precio:52.30},
               {codigo:4, descripcion:'cebollas', precio:17},
               {codigo:5, descripcion:'calabaza', precio:20},
              ];

  datos:any={
    nombre:'',
    apellidos:'',
    tel:''
  }

  public anArray:any=[
    {
      nombre:'xxxxxx',
      apellidos:'xxxxx',
      tel:'5454545454'
    },
    {
      nombre:'WWWWWWWWWW',
      apellidos:'WWWWWWWWWW',
      tel:'8787878'
    },
  ];


nombreGas="eduardo"
  constructor() { }

  ngOnInit() {
    // this.send();
  } hayRegistros() {
    return this.articulos.length>0;              
  }

  borrar(art) {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==art.codigo)
      {
        this.articulos.splice(x,1);
        return;
      }
  }

  agregar() {
    for(let x=0;x<this.articulos.length;x++)
    if (this.articulos[x].codigo==this.art.codigo)
    {
      alert('ya existe un articulo con dicho codigo');
      return;
    }        
    this.articulos.push({codigo:this.art.codigo,
                         descripcion:this.art.descripcion,
                         precio:this.art.precio });
    this.art.codigo=null;
    this.art.descripcion=null;
    this.art.precio=null;    
  }

  seleccionar(art) {
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.precio=art.precio;
  }

  modificar() {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==this.art.codigo)
      {
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].precio=this.art.precio;
        return;
      }        
    alert('No existe el código de articulo ingresado');
  }








  send(){
    //for (let i = 0; i < this.anArray.length; i++) {
      this.anArray.push({
        nombre:this.datos.nombre,
        apellidos:this.datos.apellidos,
        tel:this.datos.tel
      });
    //}


    // for(let x=0;x<this.articulos.length;x++)
    // if (this.articulos[x].codigo==this.art.codigo)
    // {
    //   alert('ya existe un articulo con dicho codigo');
    //   return;
    // }        
    // this.articulos.push({codigo:this.art.codigo,
    //                      descripcion:this.art.descripcion,
    //                      precio:this.art.precio });
    // this.art.codigo=null;
    // this.art.descripcion=null;
    // this.art.precio=null;
    // var order = [], stack=[];
    // for (let i = 0; i < this.anArray.length; i++) {
    //   if(parseInt(this.anArray[i].daysleft) == 0){ order.push(this.anArray[i]); }
    //   if(parseInt(this.anArray[i].daysleft) > 0){ order.push(this.anArray[i]); }
    //   if(parseInt(this.anArray[i].daysleft) < 0){ order.push(this.anArray[i]); }
    // }



    // this.anArray.push('this.datos =Object');
    // //  this.anArray.push({});
    // // for (let i = 0; i < this.anArray.length; i++) {
      // this.anArray.push(this.datos);
    // // } 
    console.log('Este es el array',this.anArray);
    // console.log('Estos son los datos:', this.datos);
    
    // this.anArray.push(
    //   // this.datos
    //   { 
    //     'nombre':'',
    //     'apellidos':'',
    //     'tel':''
    //   }
    // );
    // console.log(this.anArray);
    
  }
  
  async generatePdf(){
    const pdf = new PdfMakeWrapper();
    pdf.pageSize('letter');
    //HEADER
    pdf.header(
      new Table ([
        [  
          new Cell( new Txt('Column 2 with colspan').bold().fontSize(5).end ).rowSpan(2).end,
          new Cell( new Txt('Column 2 with colspan').bold().fontSize(5).end ).end,
          new Cell( new Txt('Column 2 with colspan').bold().fontSize(5).end ).end, 
        ],
        [  
          new Cell( new Txt('Column 2 with colspan').bold().fontSize(5).end ).end,
          new Cell( new Txt('Column 2 with colspan').bold().fontSize(5).end ).end,
          new Cell( new Txt('Column 2 with colspan').bold().fontSize(5).end ).end, 
        ]
      ]).widths([350, 110, 80]).alignment('center').margin([20, 8]).end
    );
    // background
    pdf.background(
        await new Img('../../../assets/icon/vms-transparencia.png').
        height(320).
        width(300).
        opacity(0.3).
        margin([150,200]).
        build()
    );
    //Contenido
    pdf.add(
      new Txt('SASISOPA').margin(120).fontSize(30).end
    );
    //FOOTER
    pdf.footer(
      await new Img('../../../assets/images/copyright_footer-07.png').
      height(100).
      width(560).
      margin([15, -70]).
      build() 
    );
    pdf.create().open();
  }

}
