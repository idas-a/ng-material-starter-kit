import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-names-list',
  styleUrls: ['./names-list.component.scss'],
  templateUrl: './names-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NamesListComponent {
  items$: Observable<string[]> = of([
    '1 Tom',
    '2 Andrew',
    '3 Chris',
    '4 Peter'
  ])
}
