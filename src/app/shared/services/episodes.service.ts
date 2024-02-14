import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  episodesUrl = 'https://rickandmortyapi.com/api/episode';
  constructor(private httpClient: HttpClient) {}

  getAllEpisodes() {
    return this.httpClient.get(this.episodesUrl);
  }

  getFiltredEpisode(filter: any) {
    const params = new HttpParams()
      .set('name', filter.name || '')
      .set('episode', filter.episode || '');

    return this.httpClient.get(this.episodesUrl, { params });
  }
}
