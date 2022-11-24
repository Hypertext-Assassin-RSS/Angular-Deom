import { Component } from '@angular/core';
import {TestService} from "./test.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Root App';

  message:string = ''

  constructor(private  testServices: TestService) {}

  ngOnInit(): void {
    this.message = this.testServices.getMsg();
  }
}

