import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  public static getItem(key: string): string {
    return sessionStorage.getItem(key);
  }
  public static setItem(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}
