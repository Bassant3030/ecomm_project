import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsServices {
   constructor(private httpClient:HttpClient) {}
    getProducts(): Observable<any> {
      return this.httpClient.get('https://ecommerce.routemisr.com/api/v1/products')
    }

  getSpecificProduct(id: string): Observable<any> {
   return this.httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}

}
