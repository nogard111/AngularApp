import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  public SearchText :string;

  constructor() { }

  public AddCourse() {
    console.log('Course added ');
  }

  public Search() {
    console.log('Search ' + this.SearchText);
  }

  ngOnInit() {
  }

}
