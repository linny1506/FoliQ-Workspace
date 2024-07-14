import { Component } from '@angular/core';
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

  options = [
    { label:'Straight or Wavy' , reference:'a'},
    { label:'Curly or Coily' , reference:'b'},
  ];

  getOutput(output:any) { this.output = output.formOutput; }
}
