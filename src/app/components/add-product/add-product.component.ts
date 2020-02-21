import { Component, OnInit } from "@angular/core";
import { GetProductsService } from "../../services/get-products.service";
import { encode } from "punycode";
@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  imageUrl: string;
  constructor(private addingProduct: GetProductsService) { }

  onChange(img) {
    const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
    async function createBase64() {
      const file = img.files[0];
      return await toBase64(file)
    }
    createBase64().then((data: string) => this.imageUrl = data)

  }
  addNewProduct(
    name: HTMLInputElement,
    price: HTMLInputElement,
    description: HTMLInputElement,
    imageSrc: HTMLInputElement
  ): void {
    this.addingProduct
      .addNewProduct({
        name: name.value,
        price: price.value,
        description: description.value,
        imageSrc: this.imageUrl
      })
      .subscribe(res => {
        return res
      })
    alert("The product is added")
    name.value = "",
      price.value = "",
      description.value = "",
      imageSrc.value = ""
  }

  ngOnInit(): void {
    this.addingProduct.getCardProducts().subscribe(data => console.log(data))
  }
}
