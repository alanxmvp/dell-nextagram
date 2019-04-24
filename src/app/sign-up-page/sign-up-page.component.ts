import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { UserService } from '../user.service'

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private service: UserService) { }

  ngOnInit() { }

  onSubmit() {
    const data = this.signupForm.value
    this.service.submitSignUp(data)
  }
}