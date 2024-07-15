import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'; // Adjust the path as necessary
import { Paging } from 'src/models/paging'; // Adjust the path as necessary
import { Product } from 'src/models/product';
import { ProductPaginData } from 'src/models/ProductPagingData';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  
  loading = false;
  departmentName!: string;
  categoryName!: string;
  searchString: string = '';
  allWords!: boolean;
  TOTAL = 0;
  CURRENT_PAGE = 1;
  PER_PAGE = 12;
  PRODUCT_COUNT: number = 0;
  SubCategoryName: any;
  filter: any = {};
  setFilterTriggered: boolean = false;
  sortOrder: any = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()

  }
  
  getProducts() {
    let filterObj: any = {};
    filterObj.DepartmentId = 0;
    this.departmentName = 'All Departments';
    filterObj.CategoryId = 0;
    filterObj.SubCategoryId = 0;
    filterObj.PageSize = this.PER_PAGE;
    filterObj.ReceivedCount = (this.CURRENT_PAGE - 1) * this.PER_PAGE;
    filterObj.CurrentPage = this.CURRENT_PAGE;
    filterObj.SearchString = this.searchString;
    filterObj.orderBy = this.sortOrder ? 'price ' + this.sortOrder : null;

    this.productService.getProductList(filterObj).subscribe((res) => {
        if (res.status == 200) {
            let productPagingObj: ProductPaginData = res.data as ProductPaginData;
            this.productList = !this.productList.length ? productPagingObj.Products : this.productList.concat(productPagingObj.Products);
          
            this.PRODUCT_COUNT = productPagingObj.ProductCount;
            console.log('product List', this.productList)
        }
    });
}

}
