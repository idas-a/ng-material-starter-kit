import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {JobPostModel} from "../../models/job-post.model";
import {JobPostService} from "../../services/job-post.service";

@Component({
  selector: 'app-grid-jobs',
  styleUrls: ['./grid-jobs.component.scss'],
  templateUrl: './grid-jobs.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridJobsComponent {
  readonly element$: Observable<JobPostModel[]> = this._JobPostService.getAll();
  constructor (private _JobPostService: JobPostService) {

  }
}
