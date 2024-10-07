import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ShortenerService } from './services/shortener.service';
import type { Url } from './services/shortener.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  shortenerService = inject(ShortenerService);
  title = 'chibi-link';
  url = signal<string>('');
  shortUrl = '';

  handleUrl() {
    this.shortenerService.postUrl(this.url).subscribe((data: Url) => {
      this.shortUrl = data.shortUrl;
      console.log(this.shortUrl);
    });
  }
}
