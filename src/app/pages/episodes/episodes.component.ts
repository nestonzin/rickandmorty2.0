import { Component } from '@angular/core';
import { EpisodesService } from '../../shared/services/episodes.service';

import { HeroComponent } from '../../components/hero/hero.component';
// import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss',
})
export class EpisodesComponent {
  episodes: any;
  constructor(private episodeService: EpisodesService) {}

  ngOnInit() {
    this.getAllEpisodes();
  }

  getAllEpisodes() {
    this.episodeService.getAllEpisodes().subscribe((res) => {
      this.episodes = res;
      console.log(this.episodes);
    });
  }
}
