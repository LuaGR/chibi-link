import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '@env/environment';

describe('AuthService', () => {
  let service: AuthService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
        AuthService
      ]
    });
    service = TestBed.inject(AuthService);
    httpTesting = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTesting.verify()
  })

  it('should login correctly', async () => {
    //given
    const mockResponse = { token: 'fake-jwt-token' }

    //when
    const user = {email: 'user@example.com', password: 'password123'}
    const login$ = service.login(user)
    const loginPromise = firstValueFrom(login$)
    const baseUrl = environment.baseUrl
    const req = httpTesting.expectOne(`${baseUrl}/login`)

    expect(req.request.method).toBe('POST')
    expect(req.request.body).toEqual({email: 'user@example.com', password: 'password123'})

    req.flush(mockResponse)

    //then
    expect(await loginPromise).toEqual('fake-jwt-token')
  })



});
