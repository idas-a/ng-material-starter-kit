import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { GridJobsComponent } from './grid-jobs.component';

@NgModule({
  imports: [MatGridListModule, CommonModule, MatCardModule],
  declarations: [GridJobsComponent],
  providers: [],
  exports: [GridJobsComponent]
})
export class GridJobsComponentModule {
}
