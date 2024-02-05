import { Component } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AutoCompleteModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
