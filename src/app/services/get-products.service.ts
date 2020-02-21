import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Product } from "../models/product.model";
import { timer, Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class GetProductsService {
  private allProudctsUrl = "https://products-server-store.herokuapp.com/all-products";
  private productDetailUrl = "https://products-server-store.herokuapp.com/productId";
  private saveProductUrl = "https://products-server-store.herokuapp.com/addProduct";
  private buyProductUrl = "https://products-server-store.herokuapp.com/buyProducts";
  private cardProductUrl = "https://products-server-store.herokuapp.com/cardProducts"
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  constructor(private http: HttpClient) { }
  getAllProducts() {
    return this.http.get(this.allProudctsUrl);
  }
  buyProduct(body) {
    return this.http.put(this.buyProductUrl, body, this.httpOptions)
  }
  getCardProducts() {
    return this.http.get(this.cardProductUrl)
  }
  getProduct(_id: string) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let parametres = new URLSearchParams();
    parametres.set("_id", _id);
    return this.http.get(`${this.productDetailUrl}?_id=${_id}`);
  }
  addNewProduct(body) {
    console.log(body)
    return this.http.post(this.saveProductUrl, body, this.httpOptions)
  }
}
