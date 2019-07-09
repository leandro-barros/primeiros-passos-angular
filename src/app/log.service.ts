import { Inject } from '@angular/core';

export class LogService {

  log(msg: string) {
    console.log(`LOG ${msg}`);
  }
}
