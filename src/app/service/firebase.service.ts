import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseService {
  constructor() { }

  log(){
    console.log('I am the logging service');
  }

}
