import { Injectable } from '@angular/core';

export enum LocalKeys {
  token = 'token'
}

@Injectable({
  providedIn: 'root'
})
export class LocalManagerService {

  static getItem(key: LocalKeys): string | null {
    return localStorage.getItem(key)
  }

  static setItem(key: LocalKeys, value: string): void {
    localStorage.setItem(key, value)
  }

  static clearItem(key: LocalKeys): void {
    localStorage.removeItem(key)
  }
}
