import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private apiURL = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) { }

  public getBeerList(page: number, perPage: number, abv?: number, ibu?: number, ebc?: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());
    this.setNewParam(params, 'abv_gt', abv, -0.5);
    this.setNewParam(params, 'abv_lt', abv, 0.5);
    this.setNewParam(params, 'ibu_gt', ibu, -10);
    this.setNewParam(params, 'ibu_lt', ibu, 10);
    this.setNewParam(params, 'ebc_gt', ebc, -5);
    this.setNewParam(params, 'ebc_lt', ebc, 5);

    return this.http.get<any>(this.apiURL, {params});
  }

  public setNewParam(param: HttpParams, paramName: string, paramValue: number, diff: number) {
    if (!!paramValue) {
      return param = param.set(paramName, Math.round(paramValue + diff) > 0 ? Math.round(paramValue + diff).toString() : '0');
    }
  }

  public getBeerItem(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<any>(url);
  }
}
