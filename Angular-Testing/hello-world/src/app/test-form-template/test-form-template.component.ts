import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-test-form-template',
	templateUrl: './test-form-template.component.html',
	styleUrl: './test-form-template.component.scss'
})
export class TestFormTemplateComponent {
	testForm = new FormGroup({
		inputOne: new FormControl('default'),
		inputTwo: new FormControl(''),
	})
}
