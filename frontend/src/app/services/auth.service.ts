import { AuthAdapter } from '@/adapters';
import { AuthData, LoginResponse } from '@/models';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = environment.baseUrl;
  private http = inject(HttpClient);
  private router = inject(Router)

  refreshToken(): Observable<string> {

    const refreshToken = localStorage.getItem('refreshToken')

    if (!refreshToken) {
      this.logOut()
      return throwError(() => new Error('No refresh token found'))
    }

    return this.http
      .post<{refreshToken: string}>(`${this.baseUrl}/token`, {refreshToken})
      .pipe(
        map( response => response.refreshToken ),
        tap( newAccessToken => {
            localStorage.setItem('token', newAccessToken);
        }),
        catchError( error => {
        this.logOut()
        return throwError(() => error)
      }))
  }

  register(user: AuthData): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/register`, user)
  }

  login(user: AuthData): Observable<string> {
    return this.http
      .post<LoginResponse>(`${this.baseUrl}/login`, user)
      .pipe(
        map(AuthAdapter.adapt),
      )
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }

}
