import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError } from 'rxjs';

import {
  CharacterFilter,
  CharacterApiResponse,
} from '../interfaces/characters';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  characterUrl = 'https://rickandmortyapi.com/api/character/';
  private personagensFiltradosPorNomeSource = new BehaviorSubject<any>(null);
  personagensFiltradosPorNome$ =
    this.personagensFiltradosPorNomeSource.asObservable();

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
  getCharacterByFilter(
    filter: CharacterFilter
  ): Observable<CharacterApiResponse> {
    const params = new HttpParams()
      .set('name', filter.name || '')
      .set('status', filter.status || '')
      .set('species', filter.species || '')
      .set('type', filter.type || '')
      .set('gender', filter.gender || '');

    return this.httpClient
      .get<CharacterApiResponse>(this.characterUrl, { params })
      .pipe(
        catchError((error) => {
          // Adicione aqui o tratamento de erros desejado, por exemplo, log ou notificação
          console.error('Erro na requisição:', error);
          throw error; // Rejeita o Observable com o erro
        })
      );
  }

  getCharacterById(id: number) {
    const url = `${this.characterUrl}${id}`;
    return this.httpClient.get(url);
  }
}
