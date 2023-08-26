/**
 * Title: home.component.ts
 * Author: William Austin
 * Date: 26 August 2023
 * Description: Home component
 */

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoggedIn: Boolean;

  constructor(private route:ActivatedRoute){
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }
}
