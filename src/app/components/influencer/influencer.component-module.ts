import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { InfluencerComponent } from './influencer.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatListModule, MatChipsModule],
  declarations: [InfluencerComponent],
  providers: [],
  exports: [InfluencerComponent]
})
export class InfluencerComponentModule {
}
