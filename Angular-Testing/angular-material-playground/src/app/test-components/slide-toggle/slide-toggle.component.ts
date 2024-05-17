import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [MatSlideToggleModule, CommonModule],
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.scss'
})

export class SlideToggleComponent implements OnInit{
  sliderValue!:boolean;

  constructor() {}

  ngOnInit(): void {
      this.sliderValue = false;
  }

  toggle() {
    this.sliderValue = !this.sliderValue;
    console.log("status:", this.sliderValue);
  }
}
