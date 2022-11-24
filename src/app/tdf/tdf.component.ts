import { Component } from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {
  skills = ['java','html','css','mysql'];

  model = new Customer('Rajith','Thoppuwa',this.skills[0])

  submitted = false

  onSubmit(){
    this.submitted = true
  }

  getData(){
    return JSON.stringify(this.model)
  }
}
