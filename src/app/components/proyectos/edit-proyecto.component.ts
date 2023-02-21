import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/servicios/image.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from 'src/modelo/proyecto';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(
    private proyectoS: ProyectoService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.proyectoS.detail(id).subscribe(
        data =>{
          this.proyecto = data;
        }, err =>{
          alert("Error al modificar el proyecto");
          this.router.navigate(['']);
        }
      )
    }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe(
      data => {
        alert("Proyecto modificado correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imageService.uploadImage($event, name)
  }

}
