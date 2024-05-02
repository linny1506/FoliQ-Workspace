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
  public data?: TotalCount;   // see TotalCount.ts -- this holds the structure of the json response

  constructor(private http:HttpClient) { }

  // lifecycle hooks
  ngOnInit() { this.reload(); }

  reload(){
    this.http.get<TotalCount>('https://api.airtable.com/v0/appjD3ZsQFD6Lb9D7/TotalCount',
    {
      headers: new HttpHeaders({
        Authorization: 'Bearer patOxK3aX3qlbbKpx.884c70d8d90db6e40ec31960795cb682016f5f32623916d406437f8a1e722c3b'
      })
    }
  ).subscribe(data => this.data = data);
  }
}
