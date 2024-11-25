import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: `./header.component.html`,
  standalone: true, // when set to false, the component will become `module component`, which is a way that older version use
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'app header';
}
