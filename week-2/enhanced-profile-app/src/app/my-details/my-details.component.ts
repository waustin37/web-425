import { Component } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ]
  constructor(fullName: string, favoriteFood: string, favoriteColor: string){
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor
  }

  toString(){
    console.log(`\n  Full name: ${this.fullName}\n  Favorite Food: ${this.favoriteFood}\n  Favorite Color: ${this.favoriteColor}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

export class MyDetailsComponent {
  myProfile: Person;
  constructor(){
    this.myProfile = new Person("William Austin", "Tacos", "Blue");
    this.myProfile.toString();
  }

}
