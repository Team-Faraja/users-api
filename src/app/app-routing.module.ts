import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full',
  },
  {
    path: 'all',
    component: AllUsersComponent,
    data: {
      title: 'All Users',
    },
  },
  {
    path: 'all/:id/details',
    component: UserDetailsComponent,
    data: {
      title: 'User Details',
    },
  },
  {
    path: 'add',
    component: AddUserComponent,
    data: {
      title: 'Add Users',
    },
  },
  {
    path: 'all/:id/edit',
    component: AddUserComponent,
    data: {
      title: 'Edit User',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
