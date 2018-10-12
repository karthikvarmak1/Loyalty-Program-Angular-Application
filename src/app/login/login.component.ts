import { Component, OnInit } from '@angular/core';
import { EnrollDetails } from '../enroll/enroll.interface';
import { AppService } from '../services/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  socket: SocketIOClient.Socket;
  userId = 'karthikvarmak';
  password = 'varma';
  invalidCredentials = false;
  enrolledUser: any;

  constructor(private readonly appService: AppService, private route: ActivatedRoute, private router: Router) {
    this.socket = io.connect(environment.serverURL);
  }

  ngOnInit() {
  }

  login(userId, password) {
    if (!userId) {
      document.getElementById('userId').style.borderColor = 'red';
      return;
    }
    if (!password) {
      document.getElementById('password').style.borderColor = 'red';
      return;
    }
    const loggedInUser = {
      userId,
      password
    };
    console.log(loggedInUser);
    this.appService.checkLoggedInUser(loggedInUser).subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.enrolledUser = data[0];
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userId', this.enrolledUser.userId);
          localStorage.setItem('userDetails', this.enrolledUser);
          this.socket.emit('logged-in-user', {
            msg: this.userId
          });
          this.router.navigate(['dashboard', this.enrolledUser.userId]);
        } else {
          this.invalidCredentials = true;
        }
      },
      err => console.log(err)
    );
  }

  onKey(event: any) {
    const name = event.target.name;
    this.invalidCredentials = false;
    if (name === 'userId') {
      document.getElementById('userId').style.borderColor = 'black';
    }
    if (name === 'password') {
      document.getElementById('password').style.borderColor = 'black';
    }
  }

}
