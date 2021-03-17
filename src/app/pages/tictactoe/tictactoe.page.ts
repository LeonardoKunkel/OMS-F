import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.page.html',
  styleUrls: ['./tictactoe.page.scss'],
})
export class TictactoePage implements OnInit {

  positionX:any=[1, 2, 3];
  positionY:any=[1, 2, 3];
  constructor() { }

  ngOnInit() {
  }

}
