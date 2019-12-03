import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MyserviceService } from '../services/myservice.service';
import * as _ from 'lodash';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {
  msg = '';
  constructor(private authService: AuthService, private routes: Router) { }

  async check(uname: string, p: string) {
    try {
      const output = await this.authService.login(uname, p);
      localStorage.setItem('username', uname);
      localStorage.setItem('token', _.get(output, 'access_token'));
      this.routes.navigate(['/starter']);
    } catch (error) {
      this.msg = 'Invalid Username or Password';
    }
  }

  ngOnInit() {}
}
