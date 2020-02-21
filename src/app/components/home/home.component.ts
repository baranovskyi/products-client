import { Component, OnInit } from "@angular/core";
import { GetProductsService } from "../../services/get-products.service";
import { Product } from "../../models/product.model";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  products: Object;
  constructor(private allProducts: GetProductsService) {}
  getProducts() {
    this.allProducts.getAllProducts().subscribe(res => {
      this.products = res;
    });
  }
  ngOnInit(): void {
    this.getProducts();
  }
}
