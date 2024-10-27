import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  HeaderComponent,
  InputUrlComponent,
  ShortededUrlComponent,
  FooterComponent,
} from '@/components';

import { MatCardModule } from '@angular/material/card';
import { ShortenerService } from '@/services/shortener.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    InputUrlComponent,
    ShortededUrlComponent,
    FooterComponent,
    MatCardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  shortenerService = inject(ShortenerService);
  title = 'chibi-link';
  url = signal<string>('');
  shortUrl = signal<string>('');

  updateUrl(event: string) {
    this.shortUrl.set(event);
  }
}
