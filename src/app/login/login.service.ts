import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class LoginService {
  errorHandler: any;
  
  baseurl = environment.apiurl;
  constructor(private http: HttpClient ) { }

  login(username: string, password: string): Observable<any> {
    var userData = "username=" + username + "&password=" + password + "&grant_type=password";    
    return this.http.post<any>(this.baseurl + 'token', userData)
  }
 /**
    * // get token for aunthicate user
    **/
  GetforAunthicate(): Observable<any> {  
      //var userData = "userId=1";   
     return this.http.get<any>(this.baseurl + 'api/User/GetUserDetails')
  }
  
   
}