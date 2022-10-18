import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
  users: any[] = [];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res;
      },
      complete: () => {},
      error: (err) => {
        console.log(err);
      },
    });
  }

  viewUser(userId: any) {
    this.router.navigate([`all/${userId}/details`]);
  }
}
