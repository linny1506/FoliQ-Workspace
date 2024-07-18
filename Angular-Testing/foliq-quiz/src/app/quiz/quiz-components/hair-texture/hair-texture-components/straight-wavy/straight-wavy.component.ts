import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { GenericThumbLabelSliderComponent } from '../../../../../component/generic-thumb-label-slider/generic-thumb-label-slider.component';
import { MatSlider, MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-straight-wavy',
  standalone: true,
  imports: [GenericThumbLabelSliderComponent,
    MatSlider, MatSliderModule
  ],
  templateUrl: './straight-wavy.component.html',
  styleUrl: './straight-wavy.component.scss'
})
export class StraightWavyComponent implements AfterViewInit{
  // Based off of this code: https://stackoverflow.com/a/38350878/25376114

  // #region #canvas functions 
  @ViewChild('canvas', {static:false}) canvas!: ElementRef;
  context!: CanvasRenderingContext2D;

  // lifecycle hook to create/initialize the frame.
  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.draw();
  }

  // variables to define the dimensions of the canvas
  canvasWidth:number = 300;
  canvasHeight:number = 200;

  /** draw()
   * @description draws the contents of the frame
   */
  draw() {
    for(let x=0; x<=this.canvasWidth; x+=1) { // 360 steps (degrees) for entire sine period
        let y = this.canvasHeight/2.0 - Math.sin(this.period * x*Math.PI/this.canvasHeight/2)*this.amplitude; // calculate y flipped horizontally, converting from DEG to RADIAN
        this.context.lineTo(x,y); // draw the point
    }
    this.context.stroke(); // strokes the drawing to the canvas
    this.output.emit({type:"straightWavy", amplitude: this.amplitude, period:this.period,});
  }

  /** clear()
   * @description clear the canvas
   */
  clear() {
    this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight);
    this.context.beginPath();
  }
  // #endregion

  // slider functions
  @Output() output = new EventEmitter<{type:"straightWavy" | "curlyCoily", amplitude:number, period:number, pitch?:number, }>()
  amplitude:number = 10;
  amplitudeParams = {
    min:0,
    max:this.canvasHeight/2,
    step:1,
  }
  period:number = 10;
  periodParams = {
    min:0,
    max:50,
    step:0.25,
  }

  /** submitAmplitude() 
   * @param event an event stream based off of interaction of the slider
   * @description reads the value of the 'amplitude' slider, then re-draws the canvas
   */
  submitAmplitude(event:any) {
    this.amplitude = Number((event.target as HTMLInputElement).value);
    this.clear();
    this.draw();
  }

  /** submitPeriod()
   * @param event an event stream based off of interaction of the slider
   * @description reads the value of the 'period' slider, then re-draws the canvas
   */
  submitPeriod(event:any) {
    this.period = Number((event.target as HTMLInputElement).value);
    this.clear();
    this.draw();  
  }
  
  /** formatLabel()
   * @param value number, the value of the slider being passed into the jawn
   * @returns returns the value to be displayed on the thumb slider
   */
  formatLabel(value:number) { return `${value}`; }
}
