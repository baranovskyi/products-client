import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CardComponent } from "./components/card/card.component";
import { DetailProductComponent } from "./components/detail-product/detail-product.component";
import { AddProductComponent } from "./components/add-product/add-product.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "card", component: CardComponent },
  { path: "detail/:id", component: DetailProductComponent },
  { path: "add-new-product", component: AddProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
