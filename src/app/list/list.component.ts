import { Component, OnInit } from '@angular/core';

export interface Carro {
  marca: string;
}

@Component({
  selector: 'spa-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  selecionado: string;

  carros: Carro[] = [
    { marca: 'Toyota' },
    { marca: 'Volkswagen' },
    { marca: 'Ford' },
    { marca: 'Honda' },
    { marca: 'Nissan' },
    { marca: 'Hyundai' },
    { marca: 'Chevrolet' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
