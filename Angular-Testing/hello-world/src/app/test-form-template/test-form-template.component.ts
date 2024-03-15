import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu'

@Component({
	selector: 'app-test-form-template',
	templateUrl: './test-form-template.component.html',
	styleUrl: './test-form-template.component.scss'
})
export class TestFormTemplateComponent {
	// v0
	testForm = new FormGroup({
		inputOne: new FormControl('default'),
		inputTwo: new FormControl(''),
	})

	// v1
	info = new FormGroup({
		name: new FormControl(''),
		email: new FormControl(''),
	})

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

	// v1.02
}
