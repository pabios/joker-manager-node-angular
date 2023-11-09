import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SpecVille} from "../models/specVille.model";

@Injectable({
  providedIn: 'root'
})
export class SpecVilleService {

  constructor(private http: HttpClient) {
  }

  getAll(){
    return this.http.get<SpecVille[]>(`${environment.specVilleApi}/gn/regions`);
  }


}
