import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCardComponent } from './user-card/user-card.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { UserPostComponent } from './user-post/user-post.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component'

@NgModule({
  declarations: [AppComponent, UserListComponent, UserDetailComponent, UserCardComponent, SignUpPageComponent, UserPostComponent, EditPageComponent, ProfilePageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
