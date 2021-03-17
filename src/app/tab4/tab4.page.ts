import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

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
