import { NgModule } from '@angular/core';
import { CategoriesMenuComponent } from './categories-menu.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [MatButtonModule, MatMenuModule, CommonModule],
  declarations: [CategoriesMenuComponent],
  providers: [],
  exports: [CategoriesMenuComponent]
})
export class CategoriesMenuComponentModule {
}
