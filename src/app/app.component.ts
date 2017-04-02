import { Component } from '@angular/core';
import { CochesService } from './coches.service';
import 'rxjs/Rx';
//import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  providers: [CochesService] ,
  template: `
  <h1>Listado de marcas:</h1>
  <ul>
  <li *ngFor="let marca of marcas"><input type="text" [(ngModel)] = "marca.marca" ><button (click)="updateMarca(marca)">Actualizar</button><button (click)="deleteMarca(marca)">Eliminar</button></li>
  <ul>
   <h2>Añadir marca:</h2>
  <div>Añadir una marca: <input type="text" [(ngModel)]="marca"><button (click)="createMarca(marca)">Añadir</button></div>
  `
})

export class AppComponent  { 
  private marcas: Array<string> = [];
  private marca:string;
  private id:number;
  constructor(private cochesService: CochesService) {}

ngOnInit() {
    this.getMarcas();
  }

getMarcas() {
    this.cochesService.getMarcas().subscribe(
      // the first argument is a function which runs on success
      data => { this.marcas = data},
      // the second argument is a function which runs on error
      error => console.error(error),
      // the third argument is a function which runs on completion
      () => console.log('Marcas cargadas')
    );
  }

  createMarca(marca:string) {
    this.cochesService.createMarca(marca).subscribe(
       data => {
         // refresh the list
         this.getMarcas();
         return true;
       },
       error => {
         console.error("No se ha podido guardar la marca");
         //return Observable.throw(error);
       }
    );
  }

  updateMarca(marcaObj:any) {
    this.cochesService.updateMarca(marcaObj.marca, marcaObj.id).subscribe(
       data => {
         // refresh the list
         this.getMarcas();
         return true;
       },
       error => {
         console.error("No se ha podido actualizar la marca");
         //return Observable.throw(error);
       },
        () => console.log('Marca actualizada')
    );
  }

  deleteMarca(marcaObj:any) {
    this.cochesService.deleteMarca(marcaObj.id).subscribe(
       data => {
         // refresh the list
         this.getMarcas();
         return true;
       },
       error => {
         console.error("No se ha podido eliminar la marca");
         //return Observable.throw(error);
       },
        () => console.log('Marca eliminada')
    );
  }

  

}
