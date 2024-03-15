import {Component, ViewChild} from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';

/**
 * @title Accordion with expand/collapse all toggles
 */
@Component({
  selector: 'app-expansion-expand-collapse-all-example',
  templateUrl: 'expansion-expand-collapse-all-example.component.html',
  styleUrl: 'expansion-expand-collapse-all-example.component.scss',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
})
export class ExpansionExpandCollapseAllExampleComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
}
