import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {ProductsSearchService} from "../../services/products-search.service";

@Component({
  selector: 'app-product-search',
  styleUrls: ['./product-search.component.scss'],
  templateUrl: './product-search.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchComponent {
  readonly list$: Observable<ProductModel[]> = this._ProductsSearchService.getAll();

  constructor(private _ProductsSearchService : ProductsSearchService) {
  }
}
