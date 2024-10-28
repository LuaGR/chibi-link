import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Url {
  url: string;
  shortUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ShortenerService {
  constructor() {}
  private apiUrl = environment.domain;
  private http = inject(HttpClient);

  postUrl(url: string): Observable<Url> {
    return this.http.post<Url>(`${this.apiUrl}`, { url });
  }
}
