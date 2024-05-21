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
  value?:number=4;
  startValue?:number = 2;
  endValue?:number = 5;

  formatLabel(value: number): string {
    if (value < 0) return 'never';
    return `${value}`;
  }

  poll() {
    console.log("~slider thangs~");
    console.log("start: ", this.startValue);
    console.log("end: ", this.endValue);
    console.log("value: ", this.value);    
  }
}
