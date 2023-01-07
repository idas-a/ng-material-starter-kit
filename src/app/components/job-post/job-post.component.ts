import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {JobPostModel} from "../../models/job-post.model";
import {JobPostService} from "../../services/job-post.service";
import {TagsService} from "../../services/tags.service";
import {TagsModel} from "../../models/tags.model";



@Component({
  selector: 'app-job-post',
  styleUrls: ['./job-post.component.scss'],
  templateUrl: './job-post.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobPostComponent {
  readonly element$: Observable<JobPostModel[]> = this._JobPostService.getAll();
  readonly tags$: Observable<TagsModel[]> = this._TagsService.getAll();
  constructor(private _JobPostService: JobPostService, private _TagsService: TagsService) {
}
}
