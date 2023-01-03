import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoComponent } from './components/crypto/crypto.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'crypto', component: CryptoComponent }, { path: 'checkbox-categories', component: CategoriesListComponent }]), CryptoComponentModule, CryptoServiceModule, CategoriesListComponentModule, CategoriesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
