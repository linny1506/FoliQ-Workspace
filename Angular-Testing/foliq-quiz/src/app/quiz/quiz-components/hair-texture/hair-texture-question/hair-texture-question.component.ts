import { Component } from '@angular/core';
import { StraightWavyComponent } from "../hair-texture-components/straight-wavy/straight-wavy.component";
import { CurlyCoilyComponent } from "../hair-texture-components/curly-coily/curly-coily.component";

@Component({
  selector: 'app-hair-texture-question',
  standalone: true,
  imports: [StraightWavyComponent, CurlyCoilyComponent],
  templateUrl: './hair-texture-question.component.html',
  styleUrl: './hair-texture-question.component.scss'
})
export class HairTextureQuestionComponent {

}
