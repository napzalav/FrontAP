import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Proyecto } from 'src/modelo/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyecto[] = [];

  constructor(private proyectoS: ProyectoService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectoS.lista().subscribe(
        data => {
            this.proyecto = data;
        }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
        this.proyectoS.delete(id).subscribe(
            data => {
                this.cargarProyecto();
            }, err => {
                alert("No se pudo eliminar el proyecto");
            }
        )
    }
  }

}
