import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  minombre:string='pepe'
  edad:number=2
  sueldos:number[]=[1700,1600,1900]
  nombres:string[]=['pedro','mario']
  // mezcla:Array[]=['mario',1]
}
