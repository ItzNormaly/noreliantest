import { Component } from '@angular/core';
import { AppService } from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'frontend';
  dateYear: number = new Date().getFullYear();
  resultado: string = "" ;


  constructor(public services: AppService){
    this.services.numberBet().subscribe((res: any) => {
      console.log(this.resultado = res.bet);
    }
    );
  }

  public printScore(resultado: string): any{
    this.services.numberBet().subscribe((res: any) => {
      console.log(this.resultado = res.bet);

    })
  }


}
