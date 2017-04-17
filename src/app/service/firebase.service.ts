import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  constructor(private httpMod: HttpModule, private http: Http) { }

  log(){
    console.log('I am the logging service');
  }

  fetchData(){
    return this.http.get('https://personalitytype-62d72.firebaseio.com/.json').map(
      (res) => res.json()
    );
  }

}
