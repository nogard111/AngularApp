import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit,OnDestroy {


  constructor() { }

  ngOnInit() {
    console.log('OnInit');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
  public LoadMore(){
    console.log('LoadMore');
  }

}
