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

  adicionar(cidade: any): Promise<any> {
    return this.http.post('http://localhost:3000/cidades', cidade)
      .toPromise()
      .then(response => response);
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`http://localhost:3000/cidades/${id}`)
      .toPromise()
      .then(() => null);
  }
}
