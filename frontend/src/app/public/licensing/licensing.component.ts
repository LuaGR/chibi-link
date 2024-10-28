import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'licensing',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './licensing.component.html',
  styleUrl: './licensing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LicensingComponent {}
