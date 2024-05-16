import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';     // imported for [ngSwitch] directive

@Component({
  selector: 'app-quiz-frame',
  templateUrl: './quiz-frame.component.html',
  styles: ``
})
export class QuizFrameComponent implements OnInit {
  // declare local variables
  pageArray!: any[];    // used to keep track of the different quiz-pages present
  pageIndex: number = 0;
  constructor() { }

  ngOnInit() {
    this.pageArray = Array(2).fill(null);   // 2 hardcoded for number of pages
  }

  backPage() {
    if( 0 < this.pageIndex) this.pageIndex--;
    console.log("inside backPage()", "this.pageIndex = ", this.pageIndex);
  }

  nextPage() {
    if(this.pageArray.length > this.pageIndex) this.pageIndex++;
    console.log("inside nextPage()", "this.pageIndex = ", this.pageIndex);    
  }
}
