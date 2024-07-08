import { Component, Input, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-generic-thumb-label-slider',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './generic-thumb-label-slider.component.html',
  styleUrl: './generic-thumb-label-slider.component.scss'
})
export class GenericThumbLabelSliderComponent{
  @Input() min:number = 0;
  @Input() max:number = 7;
  @Input() step:number = 1;
  @Input() unit!:string;
  @Input() question!:string;

  value:number = this.min;

  formatLabel(value:number) {
    if (this.max == value) return '≥' + value;
    return `${value}`;
  }
}
