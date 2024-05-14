import { Component, OnInit } from '@angular/core';
import Airtable from 'airtable';
import { environment } from 'src/environment/environment';
import { GroceryItem } from '../../GroceryItem'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styles: ``,
})

export class QuizComponent implements OnInit {
  public data?:GroceryItem;

  constructor(private http:HttpClient) {}

  ngOnInit() { this.reload(); }

  reload() {
    this.http.get<GroceryItem>('https://api.airtable.com/v0/appjD3ZsQFD6Lb9D7/GroceryList',
    {
      headers: new HttpHeaders({
        Authorization: 'Bearer patOxK3aX3qlbbKpx.884c70d8d90db6e40ec31960795cb682016f5f32623916d406437f8a1e722c3b'
      })
    }
  ).subscribe(data => this.data=data);
  }
}
