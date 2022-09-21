import { Component } from '@angular/core';
import { getName } from './utils/getName';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-injection';
  getName = getName().subscribe(console.log);
  
}
