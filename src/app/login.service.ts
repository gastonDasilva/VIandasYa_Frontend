import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  /*// Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware*/

  login(userEmail: string, pass: string) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:8585',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
    });
    const options = { headers: headers };

    return this.http.post('http://localhost:8585//usuarios/login', {
      email: userEmail,
      password: pass,
    }, options );
  }


}
