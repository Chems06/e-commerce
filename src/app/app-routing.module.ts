import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path: 'form', component: FormComponent },
  {path: 'product', component: ProductComponent },
  {path: 'user', component:UserComponent},
  {path: 'order', component:OrderComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
