import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GenericThumbLabelSliderComponent } from '../../../component/generic-thumb-label-slider/generic-thumb-label-slider.component';
import { MatSlider, MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-hair-texture',
  standalone: true,
  imports: [GenericThumbLabelSliderComponent,
    MatSlider, MatSliderModule,
  ],
  templateUrl: './hair-texture.component.html',
  styleUrl: './hair-texture.component.scss'
})
export class HairTextureComponent implements AfterViewInit {
  @ViewChild('canvas', {static:false}) canvas!: ElementRef;

  context!: CanvasRenderingContext2D;
  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.draw();
  }

  draw() {
    for(let x=0; x<=360; x += 20) { // 360 steps for entire sine period
        this.context.moveTo(x+10,180);  // for dashed line, go to start of next dash
        this.context.lineTo(x,180);  // then draw the short line
    }
    this.context.moveTo(0,180);  // back to the left before drawing the sine
    
    for(let x=0; x<=360; x+=1) { // 360 steps (degrees) for entire sine period
        let y = 180.0 - Math.sin(this.period * x*Math.PI/180)*this.amplitude; // calculate y flipped horizontally, converting from DEG to RADIAN
        this.context.lineTo(x,y); // draw the point
    }
    this.context.stroke(); // strokes the drawing to the canvas
  }

  clear() {
    this.context.clearRect(0,0,360,360);
    this.context.beginPath();
  }

  // slider things
  submitAmplitude(event:any) {
    this.amplitude = Number((event.target as HTMLInputElement).value);
    this.clear();
    this.draw();
  }

  submitPeriod(event:any) {
    this.period = Number((event.target as HTMLInputElement).value);
    this.clear();
    this.draw();  }

  amplitude:number = 180;
  amplitudeParams = {
    min:0,
    max:180,
    step:1,
  }
  period:number = 180;
  periodParams = {
    min:0,
    max:20,
    step:0.25,
  }
  
  formatLabel(amplitude:number) {
    return `${amplitude}`;
  }
}
