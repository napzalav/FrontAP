import { Component, OnInit } from '@angular/core';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Habilidad } from 'src/modelo/habilidad';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  habilidad: Habilidad[] = [];

  constructor(private habilidadS: HabilidadService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidad(): void{
    this.habilidadS.lista().subscribe(
      data =>{
        this.habilidad = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.habilidadS.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo eliminar la habilidad");
        }
      )
    }
  }

}
