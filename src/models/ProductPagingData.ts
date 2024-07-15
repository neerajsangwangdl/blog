import { Product } from "./product";

export interface ProductPaginData {
    Products: Product[];
    ProductCount: number;
}

export interface Paging {
    PageSize: number;
    ReceivedCount: number;
    CurrentPage: number;
    CategoryId: number;
    SubCategoryId: number;
    CategoryName: string;
    SubCategoryName: string;
    SearchString: string;
    orderBy: string;
}

let productPagingObj: ProductPaginData = {
    Products: [], // You can populate this array with Product objects
    ProductCount: 0 // Set the initial product count
};
