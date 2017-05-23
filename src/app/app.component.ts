import { Component } from '@angular/core';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  submitUsername(event: any) {
    this.username = '';

  }

  isButtonDisabled() {
    if (this.username === '') {
      return false;
    } else {
      return true;
    }

  }
}
