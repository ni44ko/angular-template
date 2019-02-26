import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

// @Injectable()

//This will prefetch data before painting the HTML. This will help us avoid page jumping.
// export class RouteResolverService implements Resolve<any> {
//   routeData: Observable<any>;
  
//   constructor(private productService: ProductService) { }

//   resolve(route: ActivatedRouteSnapshot): Observable<any[]> {

//     switch (route.data['page']) {
//       case 1:
//         let response1 = this.productService.restoreProductQuantities();
//         let response2 = this.productService.getAllProducts();
//         return forkJoin([response1, response2]);
//       case 2:
//       //purchase history
//       // this.routeData = this.blogService.getPostById(route.params['postid'])
//     }

//     return this.routeData
//   };
// }