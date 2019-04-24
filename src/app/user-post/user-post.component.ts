import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { ActivatedRoute } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {
  comment = new FormGroup({
    commentDesc: new FormControl(""),
    creator: new FormControl("")
  })

  images: string[] = []
  username: string
  likeCount: number
  comments = []

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const userId = this.route.snapshot.params.userId
    this.username = this.route.snapshot.params.username
    this.likeCount = 100

    this.userService.getUserImages(userId).subscribe(response => {
      this.images = response as string[]
    })

    this.userService.getComments().subscribe(list => {
      this.comments = list
    })
  }

  addLike() {
    this.likeCount++
  }

  onSubmit() {
    this.comment.patchValue({
      creator: this.username
    });
    this.userService.addComments(this.comment.value)

    this.comment.patchValue({
      commentDesc: ""
    });
  }


}
