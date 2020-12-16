import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../modele/produit';

@Component({
  selector: 'app-formproduct',
  templateUrl: './formproduct.component.html',
  styleUrls: ['./formproduct.component.css']
})
export class FormproductComponent implements OnInit {
product: Product;
@Output() eventSaveproduct = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
    this.product = new Product();
  }
save(){
this.product.like=0;
this.eventSaveproduct.emit(this.product);

}
}
