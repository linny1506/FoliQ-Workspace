import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  template: `
    <p>
      Here's a random number {{rando}}
    </p>
  `,
  styles: ``
})
export class SquareComponent {
  rando = Math.random();
}
