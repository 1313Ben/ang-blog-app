import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title: string = "List of Posts"
  postParentMessage: string = "Message coming from the post parent"

  childMessage: string = "From Child component"
  
  @Input() fromParent!: string;

  constructor () {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
