/**
 * Title: app.component.ts
 * Author: William Austin
 * Date: 08 September 2023
 * Description: App component for In-N-Out Books
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;

  constructor(){
    this.assignment='Exercise 5.3 - Navigation and Layout'
  }
}
