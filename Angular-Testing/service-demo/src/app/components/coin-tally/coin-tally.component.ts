import { Component, inject } from '@angular/core';
import { TotalCount } from '../../TotalCount';
import { TotalCountService } from '../../services/total-count.service';

@Component({
  selector: 'app-coin-tally',
  standalone: true,
  imports: [],
  templateUrl: './coin-tally.component.html',
  styleUrl: './coin-tally.component.scss'
})
export class CoinTallyComponent {
  public data?: TotalCount;   // see TotalCount.ts -- this holds the structure of the json response

  totalCountService = inject(TotalCountService);
  
  // lifecycle hooks
  ngOnInit() { this.reload(); }

  reload(){
    this.totalCountService.read().subscribe(data => this.data = data);
  }
}
