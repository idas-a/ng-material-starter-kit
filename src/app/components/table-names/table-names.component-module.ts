import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TableNamesComponent } from './table-names.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [TableNamesComponent],
  providers: [],
  exports: [TableNamesComponent]
})
export class TableNamesComponentModule {
}
