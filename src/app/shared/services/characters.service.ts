import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  characterUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) {}

  getAllCharacters() {
    return this.httpClient.get(this.characterUrl);
  }

  getNextPageCharacters(nextPageUrl: any) {
    return this.httpClient.get(nextPageUrl);
  }

  getPrevPageCharacters(prevPageUrl: any) {
    return this.httpClient.get(prevPageUrl);
  }
}
