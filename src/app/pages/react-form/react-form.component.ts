import { Component } from '@angular/core';
import {FormControl ,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent {

 CustomerForm = new FormGroup({
  name : new FormControl(''),
  age : new FormControl(''),
  mobile : new FormControl(''),
  city : new FormControl(''),
  password : new FormControl('')
 })

 saveData(){
  console.log(this.CustomerForm.value);
 }

}
