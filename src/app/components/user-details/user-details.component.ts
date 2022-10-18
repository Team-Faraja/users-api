import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  user!: IUser;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    let userId: any = this.route.snapshot.paramMap.get('id');
    this.getUserDetails(userId);
  }
  getUserDetails(userId: string | number) {
    this.subscription.add(
      this.userService.getUserById(userId).subscribe({
        next: (res) => {
          this.user = res;
        },
        complete: () => {},
        error: (err) => {
          console.log(err);
        },
      })
    );
  }

  back() {
    this.location.back();
  }

  edit(userId: string | number) {
    this.router.navigate([`all/${userId}/edit`]);
  }

  delete(userId: string | number) {
    this.subscription.add(
      this.userService.deleteUserById(userId).subscribe({
        next: (res) => {},
        complete: () => {
          this.location.back();
        },
        error: (err) => {
          console.log(err);
        },
      })
    );
  }
}
