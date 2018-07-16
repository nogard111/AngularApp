import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  public SearchText: string;
  @Output() public SearchEvent = new EventEmitter<string>();

  constructor() { }

  public AddCourse() {
    console.log('Course added ');
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
