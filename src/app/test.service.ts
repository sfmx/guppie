import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, RequestOptions } from '@angular/http';



@Injectable()
export class TestService {

  options = new RequestOptions();

  constructor(private http: Http) {
  }

  public sayHello() {
    return 'Hello';
  }


  public getUser(): Observable<any> {
    return this.http.get('https://conduit.productionready.io/api/profiles/eric', this.options)
      .map(resp => resp.json());
  }
}


