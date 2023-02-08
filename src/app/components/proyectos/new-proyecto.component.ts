import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from 'src/modelo/proyecto';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
	nombreP:string;
	descripcionP:string;
	img:string;
	pagina:string;
	repositorio:string;

  constructor(private proyectoS: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
	const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.img, this.pagina, this.repositorio);
	this.proyectoS.save(proyecto).subscribe(
		data => {
			alert("Proyecto creado correctamente");
			this.router.navigate(['']);
		}, err => {
			alert("Falló al añadir el proyecto");
			this.router.navigate(['']);
		}
	)
  }

}
