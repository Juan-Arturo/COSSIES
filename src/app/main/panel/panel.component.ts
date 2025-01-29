import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelFooterComponent } from '../../shared/panel-footer/panel-footer.component';
import { PanelHeaderComponent } from '../../shared/panel-header/panel-header.component';
import { PanelSidebarComponent } from '../../shared/panel-sidebar/panel-sidebar.component';


@Component({
  selector: 'app-panel',
  imports: [RouterOutlet,PanelFooterComponent,
    PanelHeaderComponent,PanelSidebarComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

}
