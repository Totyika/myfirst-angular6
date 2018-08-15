import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductPageComponent} from './product/product-page/product-page.component';
import {NotFoundComponent} from './not-found/not-found.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'products', component: ProductComponent, children: [
      { path: '', component: ProductListComponent },
      { path: ':slug', component: ProductListComponent },
    ] },
  { path: 'product/:prodSlug', component: ProductPageComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
