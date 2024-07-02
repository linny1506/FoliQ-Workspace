import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-styling-product-slider',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './styling-product-slider.component.html',
  styleUrl: './styling-product-slider.component.scss'
})
export class StylingProductSliderComponent {
  // question config
  question:string = 'How often do you use styling products?';
  
  // slider config
  min:number = 0;
  max:number = 7;
  step:number = 0.5;
  
  value?:number = 4;  //set slider default initial

  formatLabel(value: number): string {

    if (0 > value) return 'never';
    if (7 < value) return '7+';

    return `${value}`;
  }
}
