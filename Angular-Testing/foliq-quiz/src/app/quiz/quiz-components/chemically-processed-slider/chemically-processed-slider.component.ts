import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-chemically-processed-slider',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './chemically-processed-slider.component.html',
  styleUrl: './chemically-processed-slider.component.scss'
})
export class ChemicallyProcessedSliderComponent {
  value?:number=4;

  formatLabel(value: number): string {
    switch (value) {
      case 0: return 'Never';
      case 1: return 'I stopped using chemical processes on my hair';
      case 2: return '1-6 months';
      case 3: return '7-12 months';
      case 4: return '2 years';
      case 5: return '3 years';
      case 6: return '4 years or more';
    }

    return `${value}`;
  }
}
