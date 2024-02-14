import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'character/:id',
    component: CharacterDetailComponent,
  },
  { path: 'locations', component: LocationsComponent },
  { path: 'episodes', component: EpisodesComponent },
];
