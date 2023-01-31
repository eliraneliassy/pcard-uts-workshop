import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor(private logger: LoggerService) { }

  plus(a: number, b: number): number {
    const result = a + b;

    this.logger.log(`plus was called, result is: ${result}`);
    return result;
  }
}
