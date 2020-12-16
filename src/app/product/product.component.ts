import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../modele/produit';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 @Input() pricemaxinput: number;
 @Input() product: Product;
 @Output() notification = new EventEmitter<Product>();
  @Output() notification2 = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }
   SendNotif(){
    this.notification.emit(this.product);

  }
  delete(){
    this.notification2.emit(this.product);
  }
}
