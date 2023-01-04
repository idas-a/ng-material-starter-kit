import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {delay, map, Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  styleUrls: ['./products.component.scss'],
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  readonly list$: Observable<ProductModel[]> = this._productsService.getAll()
  ;

  constructor(private _productsService: ProductsService) {
  }
}
