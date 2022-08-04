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
    email: new FormControl(
      // like placeholder
      '', [
        Validators.required,
        Validators.email
      ]
    ),
    password: new FormControl(
      '',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]
    )
  });

  login() {
    console.log(this.loginForm.get('email'))
    console.log(this.loginForm.get('password'))
  }
}
