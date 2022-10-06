import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string;
  date!: string;
  amount!: number;
  height!: number;
  miles!: number;

  car = {
    make: 'Nissan',
    model: 'Sentra',
    year: 2018
  }

  onMilesChange(miles: string){
    this.miles = +miles;
  }
  
  onNameChange(name: string){
    this.name = name;
  }

  onDateChange(date: string){
    this.date = date;
  }

  onAmountChange(amount: string){
    this.amount = +amount;
  }

  onHeightChange(height: string){
    this.height = +height;
  }
}
