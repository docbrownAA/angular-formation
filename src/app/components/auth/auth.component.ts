import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  state: boolean;

  constructor(private authService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.state = this.authService.state();
    console.log(this.state);
  }

  login() {
    this.state = this.authService.login();
    if (this.route.snapshot.queryParamMap.has('back')) {
      this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('back'));
    }
  }

  logout() {
    this.state = this.authService.logout();
  }

}
