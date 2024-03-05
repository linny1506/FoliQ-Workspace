import { Component } from '@angular/core';                    // default
import { RouterOutlet } from '@angular/router';               // default
import { SquareComponent } from "./square/square.component";  // added for the new component

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SquareComponent]
})
export class AppComponent {
  title = 'tic-tac-toe-Example';
}
