import { Component, inject, model, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ShortenerService } from '../../services/shortener.service';
import { Url } from '../../services/shortener.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-input-url',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './input-url.component.html',
  styleUrl: './input-url.component.scss',
})
export class InputUrlComponent {
  shortenerService = inject(ShortenerService);
  url = model<string>('');
  shortUrl = model<string>('');
  onHandleUrl = output<string>();

  handleUrl() {
    this.shortenerService.postUrl(this.url()).subscribe((data: Url) => {
      this.shortUrl.set(data.shortUrl);
      console.log(this.shortUrl());

      this.onHandleUrl.emit(this.shortUrl());
    });
  }
}
