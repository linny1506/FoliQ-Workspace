import { Component, OnInit } from '@angular/core';
import { SlideToggleComponent } from '../slide-toggle/slide-toggle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-components',
  standalone: true,
  imports: [SlideToggleComponent, CommonModule],
  templateUrl: './simple-components.component.html',
  styles: '',
})
export class SimpleComponentsComponent implements OnInit {
  pageNumber:number=0;
  pageMax:number=5;

  ngOnInit(): void {
  }

  home() { this.pageNumber = 0; }
  backPage() { if(0 < this.pageNumber)this.pageNumber--; }
  nextPage() { if(this.pageMax > this.pageNumber) this.pageNumber++; }
}
