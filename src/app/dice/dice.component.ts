import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  @Input() side: number = 0;

  constructor() { 
  }

  ngOnInit(): void {
  }

  elegirImagen() : string{ 
    switch (this.side) {
      case 1:
        return 'https://cdn-icons-png.flaticon.com/512/0/751.png';
      case 2:
        return 'https://cdn-icons-png.flaticon.com/512/0/2.png';
      case 3:
        return 'https://cdn-icons-png.flaticon.com/512/0/255.png';
      case 4:
        return 'https://cdn-icons-png.flaticon.com/512/0/963.png';
      case 5:
        return 'https://cdn-icons-png.flaticon.com/512/565/565745.png';
      case 6:
        return 'https://cdn-icons-png.flaticon.com/512/0/165.png';
      default:
        return 'https://cdn-icons-png.flaticon.com/512/471/471715.png';
    }
  }
}
