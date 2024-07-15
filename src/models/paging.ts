export interface Paging {
    DepartmentId: number;
    CategoryId: number;
    SubCategoryId: number;
    PageSize: number;
    ReceivedCount: number;
    CurrentPage: number;
    SearchString: string;
    orderBy: string | null;
  }
  