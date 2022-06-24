import { Component } from '@angular/core';
import { Coche } from './coche.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de coches en ventas';
  coches: Coche[] = [
    new Coche('BMW', 'Serie3'), 
    new Coche('Audi', 'A4')
  ];
  cocheInput: string = '';
  modeloInput: string = '';

  agregarCoche(){
    let coche1 = new Coche(this.cocheInput, this.modeloInput);
    this.coches.push(coche1)
    
  }
}
