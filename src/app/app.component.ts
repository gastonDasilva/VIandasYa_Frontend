import { Component } from '@angular/core';
import { LoginService } from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  router: Router;

  constructor(private loginService: LoginService) {
    this.title = 'Spring Boot - Angular Application';
  }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(username, password).subscribe(

      res => {
        console.log(res);

      },
      error => {
        console.error(error);

      }
      /*() => this.navigate()*/
    );

  }
/*
  navigate() {
    this.router.navigateByUrl('/home');
  }
*/

}
