/**
 * Title: signin.component.ts
 * Author: William Austin
 * Date: 26 August 2023
 * Description: SignIn component
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  isLoggedIn = false;

  constructor(private router: Router){}

  signin() {
    this.isLoggedIn = true;
    this.router.navigate(['/home'], {queryParams:{isLoggedIn:this.isLoggedIn}, skipLocationChange:true})
  }
}
