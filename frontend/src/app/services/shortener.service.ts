import { Injectable, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface Url {
  url: string;
  shortUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ShortenerService {
  constructor() {}
  private apiUrl = 'http://localhost:3000';
  private http = inject(HttpClient);

  postUrl(url: WritableSignal<string>): Observable<Url> {
    // Realizar la petición POST y devolver un Observable
    return this.http.post<Url>(`${this.apiUrl}/`, { url: url() }); // Utiliza url() para obtener el valor actual
  }
}
