import {Component, input} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  minValue:number = 0;
  maxValue:number = 0;

  formatLabel(value: number): string {
    if (value > 7) return 'never';
    return `${value}`;
  }

  poll() {
    console.log("minValue: ", this.minValue);
    // console.log("maxValue: ", this.maxValue);    
  }
}
