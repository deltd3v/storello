import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    public angularFireAuth: AngularFireAuth
  ) {  }

  ngOnInit(): void {
    console.log(this.angularFireAuth)
  }

}