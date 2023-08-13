/**
 * Title: app.component.ts
 * Author: William Austin
 * Date: 12 August 2023
 * Description: App component
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = "Assignment 1.5 - Components"
}
