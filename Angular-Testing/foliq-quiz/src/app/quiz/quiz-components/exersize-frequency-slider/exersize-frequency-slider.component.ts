import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-exersize-frequency-slider',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './exersize-frequency-slider.component.html',
  styleUrl: './exersize-frequency-slider.component.scss'
})
export class ExersizeFrequencySliderComponent {
  value?:number=4;

  formatLabel(value: number): string {
    if (0 > value) return 'never';
    if (7 < value) return '7+';

    return `${value}`;
  }
}
