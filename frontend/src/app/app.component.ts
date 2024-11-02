import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './public';
import { FooterComponent, HeaderComponent } from './components';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'Chibi Link';
  seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.title.setTitle('Chibi Link');
    this.seo.meta.updateTag({
      name: 'description',
      content:
        'Acorta tus enlaces largos de forma rápida y fácil con nuestro Acortador de URL. Comparte enlaces más atractivos y obtén estadísticas en tiempo real sobre su rendimiento.',
    });
    this.seo.setCanonicalURL('https://chibi-link.vercel.app/');
    this.seo.setIndexFollow(true);
  }
}
