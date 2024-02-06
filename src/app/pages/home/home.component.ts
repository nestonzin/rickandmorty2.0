import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersService } from '../../shared/services/characters.service';

import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AutoCompleteModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  personagens: any;

  prevPageUrl: string | null = null;
  nextPageUrl: string | null = null;

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

  getPrevPageCharacters(prevPageUrl: string) {
    this.charactersService
      .getPrevPageCharacters(prevPageUrl)
      .subscribe((res) => {
        this.personagens = res;
        this.nextPageUrl = this.personagens.info.next;
        this.prevPageUrl = this.personagens.info.prev;
      });
  }
}
