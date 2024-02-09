import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
// import { AutoCompleteModule } from 'primeng/autocomplete';

import { CharactersService } from '../../shared/services/characters.service';
import { CharacterFilter } from '../../shared/interfaces/characters';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  filtro: CharacterFilter = {
    name: '',
    type: '',
    gender: '',
    species: '',
    status: '',
  };
  constructor(private characterService: CharactersService) {}

  getCharacterByFilter() {
    this.characterService.getCharacterByFilter(this.filtro).subscribe((res) => {
      console.log(res);
    });
  }
}
