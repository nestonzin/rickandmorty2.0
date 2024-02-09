import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeContentComponent } from '../../components/home-content/home-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FooterComponent, HomeContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
