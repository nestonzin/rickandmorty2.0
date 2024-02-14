import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

// import { AutoCompleteModule } from 'primeng/autocomplete';

import { CharactersService } from '../../shared/services/characters.service';
import { LocationsService } from '../../shared/services/locations.service';
import { LocationFilter } from '../../shared/interfaces/locations';
import { EpisodesService } from '../../shared/services/episodes.service';
import { EpisodeFilter } from '../../shared/interfaces/episodes';
import {
  CharacterFilter,
  CharacterApiResponse,
} from '../../shared/interfaces/characters';
import { Router } from '@angular/router';

type Filters = LocationFilter | CharacterFilter | EpisodeFilter;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() characterFilter: CharacterFilter = {};
  @Output() characterFilterChange = new EventEmitter<CharacterFilter>();

  @Input() locationFilter: LocationFilter = {};
  @Output() locationFilterChange = new EventEmitter<LocationFilter>();

  @Input() episodeFilter: EpisodeFilter = {};
  @Output() episodeFilterChange = new EventEmitter<EpisodeFilter>();

  filtro: Filters = {};

  constructor(
    private characterService: CharactersService,
    private locationsService: LocationsService,
    private episodeService: EpisodesService,
    private router: Router
  ) {}

  search() {
    const rotaAtual = this.router.url;

    if (rotaAtual.includes('')) {
      this.getCharacterByFilter();
    } else if (rotaAtual.includes('locations')) {
      this.getLocationByFilter();
    } else if (rotaAtual.includes('episodes')) {
      this.getEpisodesByFilter();
    }
  }

  getCharacterByFilter() {
    this.characterService
      .getCharacterByFilter(this.filtro)
      .subscribe((res: any) => {
        this.characterFilter = res;
        this.characterFilterChange.emit(this.characterFilter);
      });
  }

  getEpisodesByFilter() {
    this.episodeService.getFiltredEpisode(this.filtro).subscribe((res) => {
      this.episodeFilter = res;
      this.episodeFilterChange.emit(this.episodeFilter);
      console.log(res);
    });
  }

  getLocationByFilter() {
    this.locationsService.getFiltredLocation(this.filtro).subscribe((res) => {
      this.locationFilter = res;
      this.locationFilterChange.emit(this.locationFilter);
      console.log(res);
    });
  }
}
