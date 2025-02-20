import { TestBed } from '@angular/core/testing';
import {
    HttpTestingController,
    provideHttpClientTesting
} from '@angular/common/http/testing';
import { ShortenerService } from './shortener.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

describe('ShortenerService', () => {
  let service: ShortenerService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
        ShortenerService
      ],
    });
    service = TestBed.inject(ShortenerService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify()
  });

  it('should return shorten url', async () => {

    //given
    const mockResponse = { url:'www.example.com', shortUrl: "12345" }

    //when
    const shortener$ = service.postUrl('www.example.com')
    const shortenerPromise = firstValueFrom(shortener$)
    const req = httpTesting.expectOne('https://chlk.vercel.app/')

    expect(req.request.method).toBe('POST')
    expect(req.request.body).toEqual({url:'www.example.com'})

    req.flush(mockResponse)
    //then
    expect(await shortenerPromise).toEqual(mockResponse)
  }
)
})

