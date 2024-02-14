import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  socials = [
    {
      name: 'Github',
      imgUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      url: 'https://github.com/nestonzin',
    },
    {
      name: 'Lindekin',
      imgUrl:
        'https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png',
      url: 'https://www.linkedin.com/in/nestormacedojs/',
    },
  ];
}
