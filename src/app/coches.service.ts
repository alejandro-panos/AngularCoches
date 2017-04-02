import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
//import {Observable} from 'rxjs/Rx';

@Injectable()
export class CochesService {

  constructor(private http: Http) { }

  getMarcas() {
    return this.http.get('http://symfonyrest.local/app_dev.php/api').map((res: Response) => res.json())
  }

  createMarca(marca: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(marca);
    return this.http.post('http://symfonyrest.local/app_dev.php/api?marca=' + marca, body, headers).map((res: Response) => res.json());
  }

  updateMarca(marca: string, id: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(id);
    // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
    return this.http.put('http://symfonyrest.local/app_dev.php/api/' + id + '?marca=' + marca, body, headers).map((res: Response) => res.json());
  }

  deleteMarca(id: string) {
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    //let body = JSON.stringify(id);
    // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
    return this.http.delete('http://symfonyrest.local/app_dev.php/api/' + id);
  }

}