import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../services/app.service';
import { ToastsManager } from 'ng6-toastr/ng2-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: string;
  userDetails: any;

  constructor(private router: Router, private route: ActivatedRoute, private appService: AppService,
    public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.userId = params['userId'];
      if (!this.userId) {
        this.router.navigate(['/login']);
        return;
      }
      this.appService.getProfileDetails(this.userId).subscribe(
        (data: any) => {
          if (data.length > 0) {
            this.userDetails = data[0];
          }
        },
        err => console.log(err));
    });
  }

  onSubmit(formValue: any) {
    console.log(formValue);
    this.appService.updateProfile(this.userDetails).subscribe(
      (data: any) => {
        console.log('**********profile updated************');
        this.toastr.success('Your profile has been updated.', null, { toastLife: 5000 });
        // this.router.navigate(['/dashboard', this.userId]);
      },
      err => console.log(err)
    );
  }

  onReset() {
    this.userDetails = this.userDetails;
  }

}
