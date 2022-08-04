import {Component} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'LoginForm';
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  login() {
    console.log(this.loginForm.get('email'))
    console.log(this.loginForm.get('password'))
  }
}
