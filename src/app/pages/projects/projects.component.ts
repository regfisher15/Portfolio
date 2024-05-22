import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {
  @ViewChild('scrollableRow', { static: false }) scrollableRow!: ElementRef;
  @ViewChild('spotifyScrollableRow', { static: false }) spotifyScrollableRow!: ElementRef;

  scrollAmount = 768;

  scrollLeft() {
    this.scrollableRow.nativeElement.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.scrollableRow.nativeElement.scrollBy({
      left: this.scrollAmount,
      behavior: 'smooth'
    });
  }

  spotifyScrollLeft() {
    this.spotifyScrollableRow.nativeElement.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth'
    });
  }

  spotifyScrollRight() {
    this.spotifyScrollableRow.nativeElement.scrollBy({
      left: this.scrollAmount,
      behavior: 'smooth'
    });
  }
}
