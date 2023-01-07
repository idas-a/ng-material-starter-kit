import { NgModule } from '@angular/core';
import { ProductSearchComponent } from './product-search.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  imports: [MatCardModule, CommonModule, MatTableModule],
  declarations: [ProductSearchComponent],
  providers: [],
  exports: [ProductSearchComponent]
})
export class ProductSearchComponentModule {
}
