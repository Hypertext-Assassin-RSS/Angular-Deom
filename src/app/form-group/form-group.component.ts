import { Component } from '@angular/core';
import {FormGroup,FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent {
  customerForm = new FormGroup({
    customerName : new FormControl(''),
    customerAddress : new FormControl(''),
  })

  onSubmit(){
    console.log(this.customerForm.value)
  }
}
