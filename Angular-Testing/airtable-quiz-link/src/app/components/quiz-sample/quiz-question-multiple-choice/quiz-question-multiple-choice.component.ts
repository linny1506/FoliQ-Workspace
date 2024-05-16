import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz-question-multiple-choice',
  templateUrl: './quiz-question-multiple-choice.component.html',
  styles: ``
})
export class QuizQuestionMultipleChoiceComponent {
	// v1.01
	radioButton1 = new FormGroup({
		growth: 		new FormControl(),
		damage: 		new FormControl(),
		dryness: 		new FormControl(),
		frizz: 			new FormControl(),
		manageability: 	new FormControl(),
		softness: 		new FormControl(),
		strength: 		new FormControl(),
		volume: 		new FormControl(),
		length: 		new FormControl(),
		definition: 	new FormControl(),
		hydratedHair: 	new FormControl(),
		shine: 			new FormControl(),
		healthierHair: 	new FormControl(),
		healthyScalp: 	new FormControl(),
		none: 			new FormControl(),
	})

}
