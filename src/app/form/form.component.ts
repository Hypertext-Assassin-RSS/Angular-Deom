import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
    CustomerName = new FormControl('')

  updateName(){
      alert(this.CustomerName.value)
    this.CustomerName.setValue('Sanjaya')
  }
}
