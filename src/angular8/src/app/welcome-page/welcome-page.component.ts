import { Component, OnInit } from '@angular/core';

import { SessionStorageService } from '../session-storage.service';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  public userName: string = "";
  constructor() { }

  ngOnInit() {
    this.userName = SessionStorageService.getItem("username");
    SessionStorageService.setItem("username", "");
  }
}
