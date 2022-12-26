import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title: string = "List of Posts";
  postParentMessage: string = "Message coming from the post parent";

  childMessage: string = "From Child component";
  outputChildMessage: string = "Message from child component via Output";
  
  @Input() fromParent!: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor () {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  sendMessage() {
    console.log("Button clicked")
    this.messageEvent.emit(this.outputChildMessage)
  }
}
