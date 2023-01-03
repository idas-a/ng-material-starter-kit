import { NgModule } from '@angular/core';
import { CryptoComponent } from './crypto.component';
import {AsyncPipe} from "@angular/common";
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [MatCardModule, MatChipsModule, CommonModule],
  declarations: [CryptoComponent],
  providers: [],
  exports: [CryptoComponent]
})
export class CryptoComponentModule {
}
