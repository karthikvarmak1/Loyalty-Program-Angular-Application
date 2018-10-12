import { Component, OnInit } from '@angular/core';
import { EnrollDetails } from './enroll.interface';

import { AppService } from '../services/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  passwordMismatch: Boolean = true;
  confirmPassword = 'varma';
  password = 'varma';
  name = 'karthik';
  userId = 'karthikvarmak';

  constructor(private readonly appService: AppService, private router: Router) { }

  ngOnInit() {
  }

  onKey(event: any) {
    const value = event.target.value;
    if (this.password === value || value === '') {
      this.passwordMismatch = false;
    } else {
      this.passwordMismatch = true;
    }
  }

  onSubmit(formValue: EnrollDetails) {
    const enrollDetails = {
      name: formValue.name,
      userId: formValue.userId,
      password: formValue.password
    };
    console.log(enrollDetails);
    this.appService.enrollUser(enrollDetails).subscribe(
      (data: any) => this.router.navigate(['login']),
      err => console.log(err)
    );
  }

}
