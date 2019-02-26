import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  rootUrl: string;

  constructor(private http: HttpClient) {}

  // getAllProducts() {
  //   return this.http.get<ProductWithCategoryName[]>(this.rootUrl + '/getallproducts');
  // }
}
