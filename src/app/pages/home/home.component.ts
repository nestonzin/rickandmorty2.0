import { Component } from '@angular/core';

import { CharactersService } from '../../shared/services/characters.service';

import { AutoCompleteModule } from 'primeng/autocomplete';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AutoCompleteModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  personagens: any;

  ngOnInit() {
    this.getAllCharacters();
  }

  constructor(private charactersService: CharactersService) {}

  getAllCharacters() {
    this.charactersService.getAllCharacters().subscribe((res) => {
      this.personagens = res;
      console.log(this.personagens, 'ahsdakjh');
    });
  }
}
