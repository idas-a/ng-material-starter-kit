import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoComponent } from './components/crypto/crypto.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { CategoriesMenuServiceModule } from './services/categories-menu.service-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'crypto', component: CryptoComponent }, {
    path: 'checkbox-categories', component: CategoriesListComponent }, {
    path: 'categories-menu', component: CategoriesMenuComponent }, {
    path: 'public-holidays', component: PublicHolidaysComponent }, {
    path: 'categories', component: CategoriesComponent }]), CryptoComponentModule, CryptoServiceModule, CategoriesListComponentModule, CategoriesServiceModule, CategoriesMenuComponentModule, CategoriesMenuServiceModule, PublicHolidaysComponentModule, PublicHolidaysServiceModule, CategoriesComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
