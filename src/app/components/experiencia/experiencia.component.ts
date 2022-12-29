import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Experiencia } from 'src/modelo/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data =>{this.expe = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}



/*

import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/modelo/ExperienciaLaboral';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: ExperienciaLaboral = new ExperienciaLaboral("Primer Trabajo IT", "-", 2022, 2022, "Preparándome y esperando con ansias la oportunidad de empezar a trabajar en el mundo IT.")
  experiencia2: ExperienciaLaboral = new ExperienciaLaboral("Delivery", "PedidosYa", 2021, 2022, "Cadeteria, logistica y distribucion de mercaderia.");
  experiencia3: ExperienciaLaboral = new ExperienciaLaboral("Encargado", "Roperia", 2016, 2020, "Encargado de local, cajero y vendedor. Encargado de depósito y entrenador de nuevo personal.")

  experiencias: ExperienciaLaboral[] = [];

  constructor() { }

  ngOnInit(): void {
    this.experiencias[0] = this.experiencia;
    this.experiencias[1] = this.experiencia2;
    this.experiencias[2] = this.experiencia3;
  }

}
*/
