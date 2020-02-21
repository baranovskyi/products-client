import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { CardComponent } from "./components/card/card.component";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { DetailProductComponent } from "./components/detail-product/detail-product.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    AddProductComponent,
    DetailProductComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
