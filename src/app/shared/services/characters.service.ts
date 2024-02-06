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
  
}