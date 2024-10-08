import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-url',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, FormsModule],
  templateUrl: './input-url.component.html',
  styleUrl: './input-url.component.scss',
})
export class InputUrlComponent {}
