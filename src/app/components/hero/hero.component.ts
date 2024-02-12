import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

// import { AutoCompleteModule } from 'primeng/autocomplete';

import { CharactersService } from '../../shared/services/characters.service';
import { CharacterFilter } from '../../shared/interfaces/characters';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() personagensFiltrados: any;
  @Output() personagensFiltradosChange = new EventEmitter<any>();

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
      this.personagensFiltrados = res;

      // Emita o evento com os dados atualizados
      this.personagensFiltradosChange.emit(this.personagensFiltrados);
    });
  }
}
