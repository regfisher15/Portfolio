import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPersonRunning, faPersonFalling, faPersonHiking, faPersonBiking, 
        faPersonSwimming
       } from '@fortawesome/free-solid-svg-icons';

import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  faPersonRunning = faPersonRunning;
  faPersonFalling = faPersonFalling;
  faPersonHiking = faPersonHiking;
  faPersonBiking = faPersonBiking;
  faPersonSwimming = faPersonSwimming;
}
