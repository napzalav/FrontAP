import { Component, OnInit } from '@angular/core';
import { Estudio } from '../../../modelo/Estudio';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  estudio: Estudio = new Estudio("Analista de sistemas", "2020-01-01", "2021-12-12", true, "UNCUYO", "Mendoza");
  estudio2: Estudio = new Estudio("Programador", "2020-01-01", "2021-12-12", false, "UNCUYO", "Mendoza");
  estudio3: Estudio = new Estudio("Autodidacta", "2022-01-01", "Forever", false, "Internet", "Mendoza");
  estudios: Estudio[] = [];

  constructor() { }

  ngOnInit(): void {
    this.estudios[0] = this.estudio;
    this.estudios[1] = this.estudio2; 
    this.estudios[2] = this.estudio3;
  }

}
