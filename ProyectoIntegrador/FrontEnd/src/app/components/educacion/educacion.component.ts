import { Component, OnInit } from '@angular/core';
import { Estudio } from '../../../modelo/Estudio';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  estudio: Estudio = new Estudio("Autodidacta", "Internet", false, "Aprendiendo constantemente!");

  estudio2: Estudio = new Estudio("Full Stack Developer JR", "Argentina Programa", false, "Me encuentro cursando #YoProgramo, la segunda parte de Argentina Programa, este porfolio es una práctica de los conocimientos adquiridos en dicha capacitación.");
  
  estudio3: Estudio = new Estudio("Estudiante", "FreeCodeCamp",false, "Resuelvo los retos ofrecidos por la plataforma para continuar aprendiendo.");

  estudios: Estudio[] = [];

  constructor() { }

  ngOnInit(): void {
    this.estudios[0] = this.estudio;
    this.estudios[1] = this.estudio2;
    this.estudios[2] = this.estudio3;
  }

}