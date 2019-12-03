import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
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
})
export class LoginComponent implements OnInit {
  msg = '';
  constructor(private authService: AuthService, private routes: Router) { }

  async check(uname: string, p: string) {
    try {
      const loggedIn = await this.authService.login(uname, p);

      if (loggedIn) {
        const profile = await this.authService.getProfile();
        console.log(profile);
        this.routes.navigate(['/starter']); 
      }
    } catch (error) {
      this.msg = 'Invalid Username or Password';
    }
  }

  ngOnInit() {}
}
