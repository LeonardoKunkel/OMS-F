import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page implements OnInit {

  public anArray:any=[];
  form:any={
    product:'',
    siglas:'',
    nTanques: '',
    nDispensarios: ''

  };
  @ViewChild('mySlider')  slides: IonSlides;

  public swipeNext(){
    this.slides.slideNext();
  }
  
  public swipeBack(){
    this.slides.slidePrev();
  }

  constructor() { }

  ngOnInit() {
  }

}
