import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-dry-time',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './dry-time.component.html',
  styleUrl: './dry-time.component.scss'
})
export class DryTimeComponent {
  value?:number=4;

  formatLabel(value: number): string {
    if (0 > value) return 'never';
    if (4 < value) return '4+ hours';

    if (1 == value) return `${value} hr`;
    return `${value}hrs`;
  }
}
