import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Loyalty Program Application';
  socket: SocketIOClient.Socket;
  isUserLoggedIn = false;
  userId: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.socket = io.connect(environment.serverURL);
  }

  ngOnInit() {
    localStorage.setItem('isLoggedIn', 'true');
    const isUserLoggedIn = localStorage.getItem('isLoggedIn');
    if (isUserLoggedIn) {
      this.isUserLoggedIn = true;
    }
    this.userId = localStorage.getItem('userId');
    if (!this.userId) {
      this.isUserLoggedIn = false;
      this.router.navigate(['/login']);
    }
    this.socket.on('logged-in-user-client', (data: any) => {
      this.isUserLoggedIn = true;
      this.userId = data.msg;
    });
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    localStorage.removeItem('userDetails');
    this.isUserLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
