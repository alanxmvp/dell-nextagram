import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Profile {
  userName: string;
  userDesc: string;
  blogLink: string;
  fbLink: string;
  email: string;
}

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  users: Profile[];

  profile = new FormGroup({
    userName: new FormControl(""),
    userDesc: new FormControl(""),
    blogLink: new FormControl(""),
    fbLink: new FormControl(""),
    email: new FormControl("")
  })

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUserDetail()

    this.profile.setValue({
      userName: this.users[0].userName,
      userDesc: this.users[0].userDesc,
      blogLink: this.users[0].blogLink,
      fbLink: this.users[0].fbLink,
      email: this.users[0].email
    });
  }

  onSubmit() {
    this.userService.updateProfile(this.profile.value)
    window.location.href = '/profile'
  }
}
