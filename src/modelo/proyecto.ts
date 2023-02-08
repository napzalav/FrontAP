export class Proyecto{
    id?:number;
    nombreP:string;
    descripcionP:string;
    img:string;
    pagina:string;
    repositorio:string;

    constructor(nombreP:string, descripcionP:string, img:string, pagina:string, repositorio:string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.img = img;
        this.pagina = pagina;
        this.repositorio = repositorio;
    }
}