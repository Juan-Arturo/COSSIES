import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent {
 
  constructor(private router: Router) {}

  iniciarSesion() {
    this.router.navigate(['/panel/home']); // Cambia '/login' por la ruta deseada
  }
}
