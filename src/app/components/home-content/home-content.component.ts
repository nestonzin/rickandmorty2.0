import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersService } from '../../shared/services/characters.service';
import { CharacterFilter } from '../../shared/interfaces/characters';

import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss',
})
export class HomeContentComponent {
  personagens: any;

  prevPageUrl: string | null = null;
  nextPageUrl: string | null = null;

  filtro: CharacterFilter = {
    name: '',
    type: '',
    gender: '',
    species: '',
    status: '',
  };

  ngOnInit() {
    this.getAllCharacters();
  }

  constructor(private charactersService: CharactersService) {}

  getAllCharacters() {
    this.charactersService.getAllCharacters().subscribe((res) => {
      this.personagens = res;
      this.nextPageUrl = this.personagens.info.next;
      this.prevPageUrl = this.personagens.info.prev;
      console.log(this.personagens, 'ahsdakjh');
    });
  }

  getNextPageCharacters() {
    this.charactersService
      .getNextPageCharacters(this.nextPageUrl)
      .subscribe((res) => {
        this.personagens = res;
        this.nextPageUrl = this.personagens.info.next;
        this.prevPageUrl = this.personagens.info.prev;
      });
  }

  getPrevPageCharacters() {
    this.charactersService
      .getPrevPageCharacters(this.prevPageUrl)
      .subscribe((res) => {
        this.personagens = res;
        this.nextPageUrl = this.personagens.info.next;
        this.prevPageUrl = this.personagens.info.prev;
      });
  }

  getCharacterById(id: number) {
    this.charactersService.getCharacterById(id).subscribe((res) => {
      console.log(res, 'tst');
    });
  }

  //nao ta funcionando
  // getCharacterByFilter(filter: any) {
  //   this.charactersService.getCharacterByFilter(filter).subscribe((res) => {
  //     console.log(res, 'jshdasjfg');
  //   });
  // }
}
