import { Component, Input, OnInit, ViewChild, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-acordeon-federal',
  templateUrl: './acordeon-federal.component.html',
  styleUrls: ['./acordeon-federal.component.scss'],
})
export class AcordeonFederalComponent implements OnInit {

  acordeonExpand = false;
  @Input() usuario; 
  @Input() nombreusuario:string = 'sin nombre' ;
  @ViewChild('cc')  cardContent: any;

  constructor(
    public renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  toggleAcordeon() {
    if (this.acordeonExpand) {
      this.renderer.setStyle(this.cardContent.el, 'max-height', '0px');
    } else {
      this.renderer.setStyle(this.cardContent.el, 'max-height', '800px');
    }
    this.acordeonExpand = !this.acordeonExpand;
  }

}
