import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faHouse = faHouse;
}
