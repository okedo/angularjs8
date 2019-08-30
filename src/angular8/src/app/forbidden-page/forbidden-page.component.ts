import { Component } from '@angular/core';

@Component({
  selector: 'app-forbidden-page',
  templateUrl: './forbidden-page.component.html',
  styleUrls: ['./forbidden-page.component.scss']
})
export class ForbiddenPageComponent {
  public navigateBack() {
    console.log(window.location);
    window.location.href="/";
  }
}
