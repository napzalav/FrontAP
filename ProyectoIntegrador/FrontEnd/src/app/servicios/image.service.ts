import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string){
    const file = $event.target.files[0]
    // console.log(file);
    const imgRef = ref(this.storage, `imagen/`+ name)
    uploadBytes(imgRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error))
  }

  getImages(){
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("La URL es: " + this.url);
      }
    })
    .catch(error => console.log(error))
  }
}

// la primera constante captura el evento y el console log muestra lo que hace
// la segunda constante se usa como referencia "ref", va tener la ruta de firebase con la cual trabajamos.
// esta referencia primero va a solicitar el servicio del storage de firebase y segundo va a pedir la url del archivo
// para usar el storage debemos inyectarlo en el constructor
