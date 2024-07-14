import { Component, EventEmitter, Output } from '@angular/core';
import { StraightWavyComponent } from "../hair-texture-components/straight-wavy/straight-wavy.component";
import { CurlyCoilyComponent } from "../hair-texture-components/curly-coily/curly-coily.component";
import { GenericRadiobuttonComponent } from "../../../../component/generic-radiobutton/generic-radiobutton.component";

@Component({
  selector: 'app-hair-texture-question',
  standalone: true,
  imports: [StraightWavyComponent, CurlyCoilyComponent, GenericRadiobuttonComponent],
  templateUrl: './hair-texture-question.component.html',
  styleUrl: './hair-texture-question.component.scss'
})
export class HairTextureQuestionComponent {
  output!:string;
  @Output() result = new EventEmitter<{type:"straightWavy" | "curlyCoily", amplitude:number, period:number, pitch?:number, }>();



  options = [
    { label:'Straight or Wavy' , reference:'a'},
    { label:'Curly or Coily' , reference:'b'},
  ];

  // get the output of the initial radio button question
  getTypeOutput(output:any) { this.output = output.formOutput; }

  // output the result of the individual slider component to the parent component of this container. This chains the result of the slider to wherever the question will be eventually placed
  getQuestionOutput(output:any) { this.result.emit(output); }
}
