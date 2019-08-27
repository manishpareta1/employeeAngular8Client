import { Component } from '@angular/core';
import { ApiConstants } from './api.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ApiConstants.APP_TITLE;
}
