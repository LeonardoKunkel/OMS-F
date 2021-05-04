import { ProductoService } from './../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  form: any = {
    producto: '',
    siglas: '',
    tanques: '',
    dispensarios: ''
  };
  producto: any[] = [];

  constructor( private productoService: ProductoService, public toast: ToastController ) {  }

  ngOnInit() {
    this.getProducto();
  }

  getProducto() {
    this.productoService.getProduct().subscribe((data: any) => {
      console.log(data);
      this.producto = data.productFound;
    })
  }

  postProducto() {
    this.productoService.postProduct(this.form).subscribe((data: any) => {
      console.log(data);
    });
    this.getProducto();
  }
  
  async delete(id: string) {
    this.productoService.deleteProductId(id).subscribe(
      (data: any) => {
        this.getProducto();
      }
    );
    const toast = await this.toast.create({
      message: 'Producto eliminada',
      duration: 1500
    });
    toast.present();
  }
}
