import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  array: number[];

  constructor() {
    this.array = [-1,-2,-3,-4,-5];
  }

  ngOnInit(): void {
  }

  generarUno(): number {
    return Math.floor(Math.random() * 6) + 1; // cambia el 6 por un 2 para ver generala mas rapido
  }

  salioGenerala(): boolean{
    return (new Set(this.array).size === 1); // en teoria de conjuntos los elementos iguales no se repiten dentro del conjunto
  }

  tirarDados(): void{
    this.array = [];
    for (let index = 0; index < 5; index++) {
      this.array.push(this.generarUno());
    };
  }
}
