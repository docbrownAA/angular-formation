import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  state: boolean;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.state = this.authService.state();
  }

  login() {
    this.state = this.authService.login();
  }

  logout() {
    this.state = this.authService.logout();
  }

}
