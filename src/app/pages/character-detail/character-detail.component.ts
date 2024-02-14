import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharactersService } from '../../shared/services/characters.service';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss',
})
export class CharacterDetailComponent {
  id: number = 1;

  personagemInfos: any;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharactersService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getCharacterInfosById(this.id);
    //sera que vale mais a pena transformar essa bomba em array ou usar como objeto msm?
    console.log(typeof this.personagemInfos);
  }

  getCharacterInfosById(id: number) {
    this.characterService.getCharacterById(id).subscribe((res) => {
      this.personagemInfos = res;
      console.log(this.personagemInfos, 'personagem infos?');
    });
  }
}
