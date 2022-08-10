export class Estudio{
    titulo:string;
    fechaInicio:string;
    fechaFin:string;
    finalizado:boolean;
    institucion:string;
    provincia:string;


    constructor(titulo:string, fechaInicio:string, fechaFin:string, finalizado:boolean, institucion:string, provincia:string) {
        this.titulo = titulo;
        this.fechaInicio = fechaInicio
        this.fechaFin = fechaFin
        this.finalizado = finalizado
        this.institucion = institucion
        this.provincia = provincia
    }
}