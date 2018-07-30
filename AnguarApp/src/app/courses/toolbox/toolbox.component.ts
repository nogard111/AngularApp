import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  public SearchText: string;
  @Output() public SearchEvent = new EventEmitter<string>();

  constructor(private courseService: CourseService, private activeRoute: ActivatedRoute,
    private router: Router) { }

  public AddCourse() {
    console.log('Course added ');
    this.router.navigate(['courseNew']);
  }

  public Search() {
    console.log('Search ' + this.SearchText);
    if (this.SearchEvent != null) {
      this.SearchEvent.emit(this.SearchText);
    }
  }

  ngOnInit() {
  }

}
