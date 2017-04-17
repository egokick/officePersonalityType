import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';

@Injectable()
export class FirebaseService {
  constructor(private httpMod: HttpModule, private http: Http) { }

  log(){
    console.log('I am the logging service');
  }

  fetchData(){
    return this.http.get('/public/people.json').subscribe(
      (data)=> console.log(data)
    );
  }

}
