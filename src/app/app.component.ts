import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  postArray: Array<string> = ['post1', 'post2', 'post3', 'post4', 'post5']
  
  objArray: Array<any> = [
    { id: 1, postTitle: 'Post1' },
    { id: 2, postTitle: 'Post2' },
    { id: 3, postTitle: 'Post3' },
    { id: 4, postTitle: 'Post4' },
    { id: 5, postTitle: 'Post5' }
  ]
  
  // objArray: Array<any> = []

  stepForm: string = ""

  isActiveNgStyle: boolean = true
  isActiveNgClass: boolean = true

  addNew() {
    this.objArray.push({id:6, postTitle: 'Post6'})
  }

  onDelete(i: any) {
    this.objArray.splice(i, 1);
  }

  onClick(step: string) {
    this.stepForm = step
  }

  changeStyle() {
    this.isActiveNgStyle = !this.isActiveNgStyle
  }

  changeClass() {
    this.isActiveNgClass = !this.isActiveNgClass
  }
}
