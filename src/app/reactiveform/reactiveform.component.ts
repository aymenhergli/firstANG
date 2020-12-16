import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contact} from '../modele/contact';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  newcontact: Contact;
registerform: FormGroup;
  constructor(private servicecontact: ContactService) { }

  ngOnInit(): void {
    this.registerform = new FormGroup({firstname : new FormControl('' , [Validators.required, Validators.minLength(3)]),
      lastname : new FormControl('' , [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      info: new FormGroup({address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
      })
    });
  }
onsubmit(){

  console.log(this.registerform.value);
  alert('success\n\n' + JSON.stringify(this.registerform.value,null,4));

}
reset(){
    this.registerform.reset();
}
}
