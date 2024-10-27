import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  output,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ShortenerService } from '../../services/shortener.service';
import { Url } from '../../services/shortener.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-input-url',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './input-url.component.html',
  styleUrl: './input-url.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputUrlComponent {
  shortenerService = inject(ShortenerService);
  url = model<string>('');
  shortUrl = model<string>('');
  onHandleUrl = output<string>();

  handleUrl() {
    if (!this.url().trim()) return;

    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(this.url().trim())) {
      alert('The URL is not in the correct format');
      return;
    }

    this.shortenerService.postUrl(this.url()).subscribe((data: Url) => {
      this.shortUrl.set(data.shortUrl);
      console.log(this.shortUrl());

      this.onHandleUrl.emit(this.shortUrl());
    });
  }
}
