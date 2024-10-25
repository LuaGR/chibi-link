import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ShortenerService } from './services/shortener.service';
import { ShortededUrlComponent } from './components/shorteded-url/shorteded-url.component';
import { InputUrlComponent } from './components/input-url/input-url.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    HeaderComponent,
    InputUrlComponent,
    ShortededUrlComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
