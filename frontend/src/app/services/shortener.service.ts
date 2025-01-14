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

// describe('postUrl', () => {
//     const mockResponse: UrlResponse = {
//       url: 'https://example.com',
//       shortUrl: 'https://example-domain.com/abc123',
//     };
//     const inputUrl = 'https://example.com';
//     const adaptedResponse = UrlAdapter.adapt(mockResponse);
//
//     it('should send a POST request to the correct URL', () => {
//       service.postUrl(inputUrl).subscribe();
//
//       const req = httpTesting.expectOne(`${environment.domain}`);
//       expect(req.request.method).toBe('POST');
//       expect(req.request.body).toEqual({ url: inputUrl });
//     });
//
//     it('should adapt the response correctly', () => {
//       service.postUrl(inputUrl).subscribe((result) => {
//         expect(result).toEqual(adaptedResponse);
//       });
//
//       const req = httpTesting.expectOne(`${environment.domain}`);
//       req.flush(mockResponse);
//     });
//
//     it('should handle HTTP errors gracefully', () => {
//       const errorMessage = 'Request failed';
//
//       service.postUrl(inputUrl).subscribe({
//         next: () => fail('Expected an error, but got a response'),
//         error: (error) => {
//           expect(error.status).toBe(500);
//           expect(error.statusText).toBe(errorMessage);
//         },
//       });
//
//       const req = httpTesting.expectOne(`${environment.domain}`);
//       req.flush(null, { status: 500, statusText: errorMessage });
//     });
//   });
// });
