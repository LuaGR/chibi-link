import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ShortenerService } from './shortener.service';
import type { UrlResponse } from '@/models';
import { UrlAdapter } from '@/adapters/url.adapter';
import { environment } from 'src/environments/environment';

describe('ShortenerService', () => {
  let service: ShortenerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShortenerService],
    });
    service = TestBed.inject(ShortenerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Service Initialization', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('postUrl', () => {
    const mockResponse: UrlResponse = {
      url: 'https://example.com',
      shortUrl: 'https://example-domain.com/abc123',
    };
    const inputUrl = 'https://example.com';
    const adaptedResponse = UrlAdapter.adapt(mockResponse);

    it('should send a POST request to the correct URL', () => {
      service.postUrl(inputUrl).subscribe();

      const req = httpMock.expectOne(`${environment.domain}`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual({ url: inputUrl });
    });

    it('should adapt the response correctly', () => {
      service.postUrl(inputUrl).subscribe((result) => {
        expect(result).toEqual(adaptedResponse);
      });

      const req = httpMock.expectOne(`${environment.domain}`);
      req.flush(mockResponse);
    });

    it('should handle HTTP errors gracefully', () => {
      const errorMessage = 'Request failed';

      service.postUrl(inputUrl).subscribe({
        next: () => fail('Expected an error, but got a response'),
        error: (error) => {
          expect(error.status).toBe(500);
          expect(error.statusText).toBe(errorMessage);
        },
      });

      const req = httpMock.expectOne(`${environment.domain}`);
      req.flush(null, { status: 500, statusText: errorMessage });
    });
  });
});
