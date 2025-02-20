import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '@env/environment';
import type { Url } from '@/models/url.model';
import { UrlAdapter } from '@/adapters';

@Injectable({
  providedIn: 'root',
})
export class ShortenerService {
  private apiUrl = environment.domain;
  private http = inject(HttpClient);

  postUrl(url: string): Observable<Url> {
    return this.http
      .post<Url>(`${this.apiUrl}`, { url })
      .pipe(map((response) => UrlAdapter.adapt(response)));
  }
}
