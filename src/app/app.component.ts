import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mivr';
  username: string = '';
  display: boolean = false;
  numberCount: number = 0;
  numberArray: Array<number> = [];


  resetUserNameInput(){
    this.username = '';
  }

  displayToggle(){
    this.display = this.display ? false : true;
    this.numberCount++;
    this.numberArray.push(this.numberCount)
  }
}
