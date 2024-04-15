import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TotalCount } from '../TotalCount';

@Component({
  selector: 'app-coin-tally',
  templateUrl: './coin-tally.component.html',
  styles: ``
})
export class CoinTallyComponent implements OnInit {
  public data?: TotalCount;

  constructor(private http:HttpClient) { }

  // lifecycle hooks
  ngOnInit() {
    this.http.get<TotalCount>('https://api.airtable.com/v0/appjD3ZsQFD6Lb9D7/TotalCount',
      {
        headers: new HttpHeaders({
          // Authorization: 'Bearer '
        })
      }
    )
      .subscribe(data => this.data = data);
  }
}
