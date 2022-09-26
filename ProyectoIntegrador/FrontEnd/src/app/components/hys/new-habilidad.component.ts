import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { Habilidad } from 'src/modelo/habilidad';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {
  nombreH: string;
  porcentajeH: number;

  constructor(private habilidadS: HabilidadService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const habilidad = new Habilidad(this.nombreH, this.porcentajeH);
    this.habilidadS.save(habilidad).subscribe(
      data => {
        alert("Habilidad creada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló al añadir la habilidad");
        this.router.navigate(['']);
      }
    )
  }

}
