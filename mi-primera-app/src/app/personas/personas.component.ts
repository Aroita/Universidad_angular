import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css'],
    // styles: [`h1{color: blue;}`]
})

export class personasComponent{
    deshabilitar = false;
    mensaje = '';
    titulo = 'Diseñador';
    mostrar = false


    //una vez que apreta el boton llama a "mostrar"
    agregarPersonas(){
        this.mostrar = true;
        this.mensaje = 'Persona agregada'

    }
    
    //cada vez que recibamos el valor 
    /*
    modificarTitulo(event: Event){
        console.log('entrando a metodo modificar titulo')
        this.titulo = (<HTMLInputElement>event.target).value

    }
    */
    

}