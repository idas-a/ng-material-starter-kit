import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {map, Observable} from "rxjs";
import {InfluencersModel} from "../../models/influencers.model";
import {InfluencerService} from "../../services/influencer.service";

@Component({
  selector: 'app-influencer',
  styleUrls: ['./influencer.component.scss'],
  templateUrl: './influencer.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfluencerComponent {
  readonly list$: Observable<InfluencersModel[]> = this._InfluencerService.getAll();
/*readonly followers$:Observable<InfluencersModel[]> = this._InfluencerService.getAll().pipe(map(data => ({id: data[name]})));*/
constructor(private _InfluencerService: InfluencerService) {
}
}
