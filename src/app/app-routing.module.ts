import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserListComponent } from './user-list/user-list.component'
import { UserDetailComponent } from './user-detail/user-detail.component'
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { UserPostComponent } from './user-post/user-post.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  { path: 'signup', component: SignUpPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'edit', component: EditPageComponent },
  { path: 'post/:userId/:username', component: UserPostComponent },
  { path: 'users/:userId/:username', component: UserDetailComponent },
  { path: '', component: UserListComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
