import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CryptoModel} from "../models/crypto.model";
import {Observable} from "rxjs";

@Injectable()
export class CryptoService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<CryptoModel[]> {
    return this._httpClient.get<CryptoModel[]>('https://api2.binance.com/api/v3/ticker/24hr')
  }
}
