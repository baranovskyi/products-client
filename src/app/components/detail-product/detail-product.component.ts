import { Component, OnInit, Input } from "@angular/core";
import { GetProductsService } from "../../services/get-products.service";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/models/product.model";
import { Location } from "@angular/common";
@Component({
  selector: "app-detail-product",
  templateUrl: "./detail-product.component.html",
  styleUrls: ["./detail-product.component.css"]
})
export class DetailProductComponent implements OnInit {
  @Input() products: Product;

  constructor(
    private productDetail: GetProductsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  showProductDetail(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productDetail
      .getProduct(id)
      .subscribe(res => (this.products = res as Product));
  }
  buyProduct(body) {
    this.productDetail.buyProduct(body).subscribe(data => data)
    alert('The product has been added to the card')
  }
  goBack() {
    this.location.back();
  }
  ngOnInit(): void {
    this.showProductDetail();
  }
}
