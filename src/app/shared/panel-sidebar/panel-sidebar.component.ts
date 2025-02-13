import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


declare function mainPanelJS(): any;
@Component({
  selector: 'app-panel-sidebar',
  imports: [RouterModule],
  templateUrl: './panel-sidebar.component.html',
  styleUrl: './panel-sidebar.component.css'
})
export class PanelSidebarComponent {
// metodo para cargar los JS despues de desplegar la SPA de Angular
ngOnInit(): void {
  setTimeout(() => {
    mainPanelJS();
  },50);
}
}
