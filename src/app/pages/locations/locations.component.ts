import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsService } from '../../shared/services/locations.service';
import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, HeroComponent, FooterComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {
  locations: any;
  constructor(private locationService: LocationsService) {}

  ngOnInit() {
    this.getAllLocations();
  }

  getAllLocations() {
    this.locationService.getAllLocations().subscribe((res) => {
      this.locations = res;
      console.log(res, 'LSISUDAH');
    });
  }

  getFiltredLocations($event: any) {
    this.locations = $event;
    console.log(this.locations, 'tem que logar aq');
  }
}
