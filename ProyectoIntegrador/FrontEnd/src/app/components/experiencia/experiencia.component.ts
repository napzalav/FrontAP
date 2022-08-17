import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/modelo/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia = new Experiencia("Primer Trabajo IT", "-", 2022, 2022, "Preparándome y esperando con ansias la oportunidad de empezar a trabajar en el mundo IT.")
  experiencia2: Experiencia = new Experiencia("Delivery", "PedidosYa", 2021, 2022, "Cadeteria, logistica y distribucion de mercaderia.");
  experiencia3: Experiencia = new Experiencia("Encargado", "Roperia", 2016, 2020, "Encargado de local, cajero y vendedor. Encargado de depósito y entrenador de nuevo personal.")

  experiencias: Experiencia[] = [];

  constructor() { }

  ngOnInit(): void {
    this.experiencias[0] = this.experiencia;
    this.experiencias[1] = this.experiencia2;
    this.experiencias[2] = this.experiencia3;
  }

}
