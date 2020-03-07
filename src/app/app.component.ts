import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Ezequiel';
  signos = [ 'Aries', 'Leo', 'Sagitario', 'Tauro', 'Virgo', 'Capricornio', 'Géminis', 'Libra', 'Acuario','Cáncer', 'Escorpio', 'Piscis'];

  eleccion = 'magico';
}
