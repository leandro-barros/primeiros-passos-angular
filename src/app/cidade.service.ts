import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient ) { }

  consultar(): Promise<any> {
    return this.http.get('http://localhost:3000/cidades')
        .toPromise()
        .then(response => response);
  }

  // consultar(): Observable<any> { Outra Forma
  //   return this.http.get<any>('http://localhost:3000/cidades');
  // }
}
