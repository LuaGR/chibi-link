import { Component, input } from '@angular/core';
import { MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-shorteded-url',
  standalone: true,
  imports: [MatCardContent],
  templateUrl: './shorteded-url.component.html',
  styleUrl: './shorteded-url.component.scss',
})
export class ShortededUrlComponent {
  shortededUrl = input('');
}
