import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';


declare function mainPanelJS(): any;

@Component({
  selector: 'app-root',
  imports: [MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'COSSIES';

// metodo para cargar los JS despues de desplegar la SPA de Angular
  ngOnInit(): void {
    setTimeout(() => {
      mainPanelJS();
    },50);
  }
}
