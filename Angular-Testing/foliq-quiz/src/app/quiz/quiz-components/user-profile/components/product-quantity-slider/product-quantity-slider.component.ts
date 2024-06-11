import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-product-quantity-slider',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './product-quantity-slider.component.html',
  styleUrl: './product-quantity-slider.component.scss'
})
export class ProductQuantitySliderComponent {
  // question config
  question:string = 'How many products would you like in your hair care routine?';
  
  // slider config
  min:number = 0;
  max:number = 7;
  step:number = 0.5;
  
  value?:number = 4;  //set slider default value 

  formatLabel(value: number): string {
    if (1 > value) return 'none';
    if (this.max < value) return '7+';

    return `${value}`;
  }
}
