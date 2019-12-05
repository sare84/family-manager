import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import * as AuthActionTypes  from '../../../store/actions/auth.action';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../../store/state/app.state';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../models/user.class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit{
  public getState: Observable<any>;
  public config: PerfectScrollbarConfigInterface = {};	
  public showSearch = false;
  public user: User = null;
  
  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      console.log(state);
      this.user = state.user;
    });
  }

  /** Methods */
  public signOut():void {
    this.store.dispatch(AuthActionTypes.LogOut());
  }

  // This is for Notifications
  notifications: Object[] = [
    /*
    {
      round: 'round-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    } */
  ];

  // This is for Mymessages  
  mymessages: Object[] = [
  /*
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
    */
  ];


}
