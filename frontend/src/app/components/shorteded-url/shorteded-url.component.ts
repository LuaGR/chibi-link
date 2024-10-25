import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardContent } from '@angular/material/card';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-shorteded-url',
  standalone: true,
  imports: [MatCardContent],
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
}
