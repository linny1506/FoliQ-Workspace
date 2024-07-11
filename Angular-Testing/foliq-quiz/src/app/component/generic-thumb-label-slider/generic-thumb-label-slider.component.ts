import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() output = new EventEmitter<string>();

  value:number = this.min;

  /**
   * formatLabel()
   * @param value number, number being passed into the slider
   * @returns string, the formatted label for the thumb slider
   * @description takes the numerical value of the slider and formats the display of the slider
   */
  formatLabel(value:number) {
    if (this.max == value) return '≥' + value;
    return `${value}`;
  }

  submit() { this.output.emit(`${this.value}`); }
}
