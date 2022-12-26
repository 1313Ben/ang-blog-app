import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title: string = "List of Posts"
  
  @Input() fromParent!: string;

  constructor () {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}