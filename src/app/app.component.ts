import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'ang-blog-app';
  parentMessage: string = 'Message coming from parent component'
  childMessage!: string;
  fromChildOutput!: string;

  @ViewChild(PostComponent) childComp: any;

  constructor() {
   // console.log(this.childComp)
  }
  ngAfterViewInit(): void {
    console.log(this.childComp.childMessage)
    this.childMessage = this.childComp.childMessage
  }

  receiveMessage($event: any) {
    this.fromChildOutput = $event
    console.log($event)
  }
}
