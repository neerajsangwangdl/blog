import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('productData') product: any;

  constructor(
    private DataService:DataService
  ) { }

  ngOnInit(): void {
    console.log('Product received:', this.product);
  }

}
