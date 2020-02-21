import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../../services/get-products.service'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products;
  constructor(private cardProducts: GetProductsService) { }

  ngOnInit(): void {
    this.cardProducts.getCardProducts().subscribe(data => {
      this.products = data
      console.log(this.products)
    })
  }

}
