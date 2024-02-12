import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersService } from '../../shared/services/characters.service';
import { CharacterFilter } from '../../shared/interfaces/characters';
import { LoadingComponent } from '../loading/loading.component';
import { HeroComponent } from '../hero/hero.component';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [CommonModule, ButtonModule, LoadingComponent, HeroComponent],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss',
})
export class HomeContentComponent {
  @Input() personagens: any;

  prevPageUrl: string | null = null;
  nextPageUrl: string | null = null;

  isLoading: boolean = false;
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
    this.isLoading = true;
    this.charactersService.getAllCharacters().subscribe((res) => {
      this.personagens = res;
      this.nextPageUrl = this.personagens.info.next;
      this.prevPageUrl = this.personagens.info.prev;
      this.isLoading = false;
      console.log(this.personagens, 'ahsdakjh');
    });
  }

  getNextPageCharacters() {
    this.isLoading = true;
    this.charactersService
      .getNextPageCharacters(this.nextPageUrl)
      .subscribe((res) => {
        this.personagens = res;
        this.nextPageUrl = this.personagens.info.next;
        this.prevPageUrl = this.personagens.info.prev;
        this.isLoading = false;
      });
  }

  getPrevPageCharacters() {
    this.isLoading = true;
    this.charactersService
      .getPrevPageCharacters(this.prevPageUrl)
      .subscribe((res) => {
        this.personagens = res;
        this.nextPageUrl = this.personagens.info.next;
        this.prevPageUrl = this.personagens.info.prev;
        this.isLoading = false;
      });
  }

  getCharacterById(id: number) {
    this.isLoading = true;
    this.charactersService.getCharacterById(id).subscribe((res) => {
      console.log(res, 'tst');
      this.isLoading = false;
    });
  }

  personagensFiltrados($event: any) {
    this.personagens = $event;
    console.log($event);
  }
}
