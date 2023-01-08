import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoComponent } from './components/crypto/crypto.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NamesListComponent } from './components/names-list/names-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { TableNamesComponent } from './components/table-names/table-names.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { CryptoTableComponent } from './components/crypto-table/crypto-table.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { GridJobsComponent } from './components/grid-jobs/grid-jobs.component';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { CategoriesMenuServiceModule } from './services/categories-menu.service-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { NamesListComponentModule } from './components/names-list/names-list.component-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { TableNamesComponentModule } from './components/table-names/table-names.component-module';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductComponentModule } from './components/product/product.component-module';
import { ProductsSearchServiceModule } from './services/products-search.service-module';
import { ProductSearchComponentModule } from './components/product-search/product-search.component-module';
import { CryptoTableComponentModule } from './components/crypto-table/crypto-table.component-module';
import { JobPostComponentModule } from './components/job-post/job-post.component-module';
import { JobPostServiceModule } from './services/job-post.service-module';
import { GridJobsComponentModule } from './components/grid-jobs/grid-jobs.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'crypto', component: CryptoComponent }, {
    path: 'checkbox-categories', component: CategoriesListComponent }, {
    path: 'categories-menu', component: CategoriesMenuComponent }, {
    path: 'public-holidays', component: PublicHolidaysComponent }, {
    path: 'categories', component: CategoriesComponent }, {
    path: 'list-1-single-list-names', component: NamesListComponent }, {
    path: 'list-1-single-radio-crypto', component: CryptoListComponent }, {
    path: 'list-1-single-table-names', component: TableNamesComponent }, {
    path: 'products', component: ProductsComponent }, {
    path: 'list-1-multi-list-products', component: ProductComponent }, {
    path: 'product-search', component: ProductSearchComponent }, {
    path: 'crypto-table', component: CryptoTableComponent }, {
    path: 'job-post-table', component: JobPostComponent }, {
    path: 'list-1-multi-grid-list-jobs', component: GridJobsComponent }]), CryptoComponentModule, CryptoServiceModule, CategoriesListComponentModule, CategoriesServiceModule, CategoriesMenuComponentModule, CategoriesMenuServiceModule, PublicHolidaysComponentModule, PublicHolidaysServiceModule, CategoriesComponentModule, NamesListComponentModule, CryptoListComponentModule, TableNamesComponentModule, ProductsComponentModule, ProductsServiceModule, ProductComponentModule, ProductsSearchServiceModule, ProductSearchComponentModule, CryptoTableComponentModule, JobPostComponentModule, JobPostServiceModule, GridJobsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
