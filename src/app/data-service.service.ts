import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
 private static cinValue: string;

  
  static setValue(cin: string) {
    this.cinValue = cin;
  }

  static getValue(): string {
    return this.cinValue;

}
confirm(message: string): boolean {
  return confirm(message);
}
}
