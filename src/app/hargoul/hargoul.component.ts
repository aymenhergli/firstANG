import { Component, OnInit } from '@angular/core';
import {Product} from '../modele/produit';
import {ProductService} from '../services/product.service';
import {CalculService} from '../services/calcul.service';

@Component({
  selector: 'app-hargoul',
  templateUrl: './hargoul.component.html',
  styleUrls: ['./hargoul.component.css']
})
export class HargoulComponent implements OnInit {
  title: string;
  listproduct: Product[];
  priceMax: number;
  hideform: boolean;
  statnum: number;

  constructor(private serviceproduct: ProductService, private calcul: CalculService) {
  }

  ngOnInit(): void {
    this.hideform = true;
    this.serviceproduct.getevent().subscribe((data) => this.listproduct = data);

  }

  incrementLike(product: Product) {
    let i = this.listproduct.indexOf(product);
    this.listproduct[i].like++;
   // this.serviceproduct.updateEvent( product.id, product).subscribe((Response: any){} ;
  }

  pushProduct(p: Product) {
    this.serviceproduct.postEvent(p).subscribe(
      () => this.listproduct = [p, ...this.listproduct]
    );
    this.hideform = true;
  }

  deletep(event1: Product){
    this.serviceproduct.deleteEvent(event1.id).subscribe(() =>
      this.listproduct = this.listproduct.filter(event => event.id != event1.id) );
  }

  showform() {
    this.hideform = false;
  }

  stat() {
    this.statnum = this.calcul.getstat(this.listproduct, 'quantity', 0);

  }
}

