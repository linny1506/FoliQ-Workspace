import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-hot-tools-frequency-slider',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './hot-tools-frequency-slider.component.html',
  styleUrl: './hot-tools-frequency-slider.component.scss'
})
export class HotToolsFrequencySliderComponent {
  value?:number=4;

  formatLabel(value: number): string {
    switch (value) {
      case 0: return 'Never';
      case 1: return 'Every Day';
      case 2: return 'Every Other Day';
      case 3: return 'Once a Week';
      case 4: return 'Once a Month';
      case 5: return 'Less than Once a Month';
      case 6: return 'never';
    }

    return `${value}`;
  }
}
