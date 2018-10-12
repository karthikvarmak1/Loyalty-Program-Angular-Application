import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../services/app.service';
import { ToastsManager } from 'ng6-toastr/ng2-toastr';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

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

}
