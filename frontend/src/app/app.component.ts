import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ShortenerService } from './services/shortener.service';
import { ShortededUrlComponent } from './components/shorteded-url/shorteded-url.component';
import { InputUrlComponent } from './components/input-url/input-url.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    ShortededUrlComponent,
    InputUrlComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  shortenerService = inject(ShortenerService);
  title = 'chibi-link';
  url = signal<string>('');
  shortUrl = signal<string>('');

  updateUrl(event: string) {
    this.shortUrl.set(event);
    console.log('Valor recibido del componente hijo: ', this.shortUrl());
  }
}
