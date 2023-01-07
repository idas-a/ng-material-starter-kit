import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatListModule],
  declarations: [ProductComponent],
  providers: [],
  exports: [ProductComponent]
})
export class ProductComponentModule {
}
