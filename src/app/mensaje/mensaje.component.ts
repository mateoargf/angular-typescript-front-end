import { Component } from '@angular/core';
import { Conectar } from '../models/conectar';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})

export class MensajeComponent {
  nuevoTitulo:string=''
  nuevaFecha:Date=new Date()
  conectar:Conectar[]=[]
  
  agregarInfo(){
    alert(this.nuevoTitulo+ ""+this.nuevaFecha)
  }
}
