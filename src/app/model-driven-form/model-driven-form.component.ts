import { Component, OnInit } from '@angular/core';
import {Contact} from '../modele/contact';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
contact: Contact;
registerform: FormGroup;
  constructor() {

  }

  ngOnInit(): void {
    this.contact = new Contact();


    this.registerform = new FormGroup({name : new FormControl('name', Validators.required),
        email : new FormControl('email', [Validators.required, Validators.pattern('[a-zA-Z0-9]+@[a-zA-Z0-9]+[a-zA-Z]{2-4}')])
      , city: new FormControl('city', Validators.required),
        age: new FormControl('age', [Validators.required, Validators.pattern('[0-9]{2}')]),
        birth: new FormControl('birth'),
        password: new FormControl('pwd')


    });
  }
get name(){
    return this.registerform.get('name');
}
  get email(){
    return this.registerform.get('email');
  }
  get city(){
    return this.registerform.get('information').get('city');
  }
  get age(){
    return this.registerform.get('information').get('age');
  }
  get birth(){
    return this.registerform.get('information').get('birth');
  }
  get password(){
    return this.registerform.get('information').get('password');
  }
  save(){
    console.log(this.registerform.value);
  }
}
