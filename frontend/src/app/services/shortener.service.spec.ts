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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('postUrl', () => {
    it('should send a POST request and adapt the response', () => {
      const mockResponse: UrlResponse = {
        url: 'https://example.com',
        shortUrl: 'https://example-domain.com/abc123',
      };
      const inputUrl = 'https://example.com';

      const adaptedResponse = UrlAdapter.adapt(mockResponse);

      service.postUrl(inputUrl).subscribe((result) => {
        expect(result).toEqual(adaptedResponse);
      });

      const req = httpMock.expectOne(`${environment.domain}`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual({ url: inputUrl });

      req.flush(mockResponse);
    });
  });
});
