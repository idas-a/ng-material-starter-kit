import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-table-names',
  styleUrls: ['./table-names.component.scss'],
  templateUrl: './table-names.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableNamesComponent {
  items$: Observable<string[]> = of([
    '1Anna',
    '2Casey',
    '3Maria',
    '4Viviene'
  ])
}
