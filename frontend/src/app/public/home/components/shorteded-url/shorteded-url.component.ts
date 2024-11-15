import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shorteded-url',
  standalone: true,
  imports: [
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatIcon,
    MatProgressSpinnerModule,
  ],
  templateUrl: './shorteded-url.component.html',
  styleUrl: './shorteded-url.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShortededUrlComponent {
  shortUrl = input('');
  domain = environment.domain;
  result: string = '';

  ngOnChanges() {
    this.result = `${this.domain}${this.shortUrl()}`;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.result);
  }
}
