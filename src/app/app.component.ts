import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  imgUrl: string = "https://cdn-icons-png.flaticon.com/512/4392/4392554.png"

  boolRed: boolean = false

  buttonClick() {
    console.log("button clicked")
  }
  onKeyup() {
    // console.log($event.key)
    console.log("Enter key pressed")

  }
}
