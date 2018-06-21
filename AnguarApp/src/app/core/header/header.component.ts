import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public UserName :string = "Adam"
/**
 * LogOut
 */
public LogOut() {
  this.UserName = "-";
  console.log('Log out ');
}

  constructor() { }

  ngOnInit() {
  }

}
