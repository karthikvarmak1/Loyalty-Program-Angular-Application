import { Component, OnInit } from '@angular/core';
import { EnrollDetails } from '../enroll/enroll.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userId: string;
  userDetails: EnrollDetails;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => {
        this.userId = params['userId'];
        if (!this.userId) {
          this.router.navigate(['/login']);
        }
      });
  }

}
