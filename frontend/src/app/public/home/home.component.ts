import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { InputUrlComponent, ShortededUrlComponent } from '@/components';
import { MatCardModule } from '@angular/material/card';
import { ShortenerService } from '@/services/shortener.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [InputUrlComponent, ShortededUrlComponent, MatCardModule],
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
