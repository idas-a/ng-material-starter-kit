import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [CategoriesComponent],
  providers: [],
  exports: [CategoriesComponent]
})
export class CategoriesComponentModule {
}
