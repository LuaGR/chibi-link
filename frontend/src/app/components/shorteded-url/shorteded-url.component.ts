import { Component, input } from '@angular/core';
import { MatCardContent } from '@angular/material/card';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-shorteded-url',
  standalone: true,
  imports: [MatCardContent],
  templateUrl: './shorteded-url.component.html',
  styleUrl: './shorteded-url.component.scss',
})
export class ShortededUrlComponent {
  shortUrl = input('');
  domain = environment.domain;
  result: string = '';

  ngOnChanges() {
    this.result = `${this.domain}${this.shortUrl()}`;
  }
}
