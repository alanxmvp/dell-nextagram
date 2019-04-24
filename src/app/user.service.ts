import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Profile } from './profile-field.entity';

const baseUrl = 'https://insta.nextacademy.com/api/v1'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  comments = new BehaviorSubject<string[]>([])
  detail = new BehaviorSubject<string[]>([])

  private userProfile: Profile[];

  constructor(private http: HttpClient) {
    this.userProfile = [
      {
        userName: "Alan Teoh",
        userDesc: "Test",
        blogLink: "",
        fbLink: "",
        email: ""
      }
    ]
  }

  getUsers() {
    return this.http.get(`${baseUrl}/users`)
  }

  getUserImages(userId: number) {
    return this.http.get(`${baseUrl}/images?userId=${userId}`)
  }

  getComments() {
    return this.comments
  }

  getUserDetail() {
    return this.userProfile
  }

  addComments(newComment) {
    let tempComments = this.comments.getValue()
    tempComments.push(newComment)
    this.comments.next(tempComments)
  }

  updateProfile(newDetail) {
    this.userProfile[0].userName = newDetail.userName
    this.userProfile[0].userDesc = newDetail.userDesc
    this.userProfile[0].blogLink = newDetail.blogLink
    this.userProfile[0].fbLink = newDetail.fbLink
    this.userProfile[0].email = newDetail.email
  }

  submitSignUp(data: Object) {
    this.http
      .post(`${baseUrl}/users`, data)
      .subscribe(response => {
        console.log(response)
        const fakeResponse: SignupResponse = {
          auth_token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDg2OTAwODcsImlhdCI6MTU0ODYwMzY4Nywic3ViIjozMH0.MzKjnKh5ofZT7tTuejQ3D2jvDPSLrpwB9infPNc5VvM',
          message: 'Successfully created a user and signed in.',
          status: 'success',
          user: {
            id: 30,
            profile_picture:
              'http://next-curriculum-instagram.s3.amazonaws.com/profile-placeholder.jpg',
            username: 'Test User2',
          },
        }
      })
  }
}

interface SignupResponse {
  auth_token: string
  message: string
  status: string
  user: BackendUser
}

interface BackendUser {
  id: number
  profile_picture: string
  username: string
}