import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GenericThumbLabelSliderComponent } from '../../../../../component/generic-thumb-label-slider/generic-thumb-label-slider.component';
import { MatSlider, MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-curly-coily',
  standalone: true,
  imports: [GenericThumbLabelSliderComponent,
    MatSlider, MatSliderModule
  ],
  templateUrl: './curly-coily.component.html',
  styleUrl: './curly-coily.component.scss'
})
export class CurlyCoilyComponent implements AfterViewInit {
  // code based off of: https://vivekseth.com/parametric-drawing-canvas/
  canvasWidth:number = 300;
  canvasHeight:number = 100;
  
  
  // seting up the canvas
  @ViewChild('canvas', {static:false}) canvas!: ElementRef;
  context!: CanvasRenderingContext2D;
  
  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.draw();
  }

  tMax:number = 1000;     // hard coded tMax (to prevent more than 1000 calculations) NB: there's a cutoff in the draw() function once the line reaches the max x value so it should never reach the final number
  ax:number = 5;   // period
  bx:number = 2;   // pitch
  cx:number = 20;   // amplitude

  
  draw() {
    this.context.moveTo(0, this.canvasHeight/2);    // bring the starting point of the drawing to the center left
    for(let t = 0; t <= this.tMax; t+=0.1) {
      // parametric function defined as such (plug this into desmos)
      // \left(a\left(t+b\sin(t)\right),\frac{c}{1+b}\left(1-b\cos(t)\right)\right)
      let x = this.ax * (t+this.bx * Math.sin(t));
      if (this.canvasWidth < x ) break;       // stop the loop once the end of the canvas is reached
      let y = this.canvasHeight/2.0 - (this.cx/(1+this.bx)) * (-this.bx * Math.cos(t));
      
      this.context.lineTo(x,y);
    }
    this.context.stroke();  // actually draw the lines
  }
}
