import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

interface Profile {
  userName: string;
  userDesc: string;
  blogLink: string;
  fbLink: string;
  email: string;
}

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  users: Profile[] = []

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUserDetail()
  }

}
