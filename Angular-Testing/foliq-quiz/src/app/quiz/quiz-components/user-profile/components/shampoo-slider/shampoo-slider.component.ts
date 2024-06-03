import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-shampoo-slider',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './shampoo-slider.component.html',
  styleUrl: './shampoo-slider.component.scss'
})
export class ShampooSliderComponent {
  // question config
  question:string = 'How often did you shampoo each week?';
  
  // slider config
  min:number = 0;
  max:number = 7;
  step:number = 0.5;
  
  value?:number = 4;  //set slider default value 

  formatLabel(value: number): string {
    if (this.min > value) return 'never';
    if (this.max < value) return '7+';

    return `${value}`;
  }
}
