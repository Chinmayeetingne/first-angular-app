import { Component } from '@angular/core';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  product : any ={
    'name': '',
    'quantity' : '',
    'price' : '',
    'mgf' : '',
  }

  saveData(){
    console.log(this.product.name + " " + this.product.quantity + " " +this.product.price + " " +this.product.mfg);
  }
}
