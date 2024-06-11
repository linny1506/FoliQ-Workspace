import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TotalCountService } from '../../services/total-count.service';

@Component({
  selector: 'app-coin-input-form',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './coin-input-form.component.html',
  styleUrl: './coin-input-form.component.scss'
})
export class CoinInputFormComponent {
  form: FormGroup;
  coinOptions:string[] = ['Penny','Nickle','Dime','Quarter','Half-Dollar','Dollar','PennyRoll','NickleRoll','DimeRoll','QuarterRoll',];
  
  totalCountService = inject(TotalCountService);

  constructor(private fb: FormBuilder){
    this.form = fb.group({
      Coin: [this.coinOptions[0]],    // first option in coinOpions is given since that'll be the first thing displayed in the list
      Count: ['0'],   // count MUST be a string for formbuilder, this is parsed outside in the service
    })
  }

  submit() {
    let coin = this.form.value.Coin;
    let count = this.form.value.Count;
    console.log(coin);    // number
    console.log(count);   // string

    this.totalCountService.update(coin, count);
  }

}
