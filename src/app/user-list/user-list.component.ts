import { Component, OnInit } from '@angular/core'
import { UserService } from '../user.service'

interface User {
  id: number
  username: string
  profileImage: string
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = []

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(response => {
      this.users = response as User[]
    })
  }
}
