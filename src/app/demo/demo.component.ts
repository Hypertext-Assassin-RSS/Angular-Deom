import { Component } from '@angular/core';

@Component({
  selector: '[app-demo]',
  template: `<div> {{title}}</div>
  <p>{{myobject.material}}</p>
  <ul>
    <li *ngIf="myarr; else idTemplate">Array is not empty</li>
    <li *ngFor = "let char of myarr1  ">{{char}}</li>
  </ul>
  <ng-template #idTemplate >Array is Empty</ng-template>
  `,
  styles: [`div
  {
    color: red;
  }`]
})
export class DemoComponent {
  title='app working!';
  myobject = {
    color:'red',
    material:'soft'
  };
  myarr = false;
  myarr1 = ['a','e','i','o','u'];
}
