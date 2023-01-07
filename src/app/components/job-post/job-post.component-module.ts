import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { JobPostComponent } from './job-post.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [JobPostComponent],
  providers: [],
  exports: [JobPostComponent]
})
export class JobPostComponentModule {
}
