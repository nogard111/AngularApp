import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public emptyName = '-';
  public UserName = 'Adam';
  /**
   * LogOut
   */
  public LogOut() {
    this.UserName = this.emptyName;
    console.log('Log out ');
  }

  constructor() { }

  ngOnInit() {
  }

}
