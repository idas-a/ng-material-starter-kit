import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import {Observable} from "rxjs";
import {CryptoModel} from "../../models/crypto.model";

@Component({
  selector: 'app-crypto',
  styleUrls: ['./crypto.component.scss'],
  templateUrl: './crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoComponent {
  readonly list$: Observable<CryptoModel[]> = this._cryptoService.getAll();
  constructor(private _cryptoService: CryptoService) {
  }
}
