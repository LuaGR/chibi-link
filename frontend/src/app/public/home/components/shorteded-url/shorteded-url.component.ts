import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { environment } from 'src/environments/environment';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-shorteded-url',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard,
    MatTooltipModule,
    MatButtonModule,
    MatIcon,
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
