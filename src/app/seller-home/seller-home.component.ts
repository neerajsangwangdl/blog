import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'; // Adjust the path as necessary
import { Paging } from 'src/models/paging'; // Adjust the path as necessary

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }

}
