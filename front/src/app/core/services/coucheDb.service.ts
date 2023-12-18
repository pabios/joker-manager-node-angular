import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoucheDbService {

  private baseUrl = 'http://localhost:5984/salles';
  constructor(private http: HttpClient) {}
  createDocument(data: any, id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    const headers = this.createHeaders();
    return this.http.put(url, data, { headers });
  }

  getDocument(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    const headers = this.createHeaders();
    return this.http.get(url, { headers });
  }

  getAllDocuments(): Observable<any> {
    const url = `${this.baseUrl}/_all_docs`;
    const headers = this.createHeaders();
    return this.http.get(url, { headers });
  }
  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('root:root')
    });
  }
}

// private baseUrl = 'http://root:root@localhost:5984/salles';
