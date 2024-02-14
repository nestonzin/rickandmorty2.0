import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  locationsUrl = 'https://rickandmortyapi.com/api/location';
  constructor(private httpClient: HttpClient) {}

  getAllLocations() {
    return this.httpClient.get(this.locationsUrl);
  }

  getFiltredLocation(filter: any) {
    const params = new HttpParams()
      .set('name', filter.name || '')
      .set('type', filter.type || '')
      .set('dimension', filter.gender || '');

    return this.httpClient.get(this.locationsUrl, { params });
  }
}
