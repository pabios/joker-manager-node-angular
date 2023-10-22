import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import jwt_decode from 'jwt-decode';
import {Root} from "../models/element.model";
import {User} from "../models/user.model";

const TOKEN_KEY = 'TOKEN_KEY';

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  private token!: string;
  public userId!:any; //@todo number
  public  id!:any;


  countries: any[] = [
    // Pays d'Afrique
    { label: 'Algérie', value: '+213', flag: 'fi-dz' },
    { label: 'Maroc', value: '+212', flag: 'fi-ma' },
    { label: 'Nigeria', value: '+234', flag: 'fi-ng' },
    { label: 'Guinée', value: '+224', flag: 'fi-gn' },
    { label: 'Sénégal', value: '+221', flag: 'fi-sn' }, // Sénégal
    { label: 'Côte d\'Ivoire', value: '+225', flag: 'fi-ci' }, // Côte d'Ivoire
    { label: 'Gambie', value: '+220', flag: 'fi-gm' }, // Gambie
    { label: 'Tunisie', value: '+216', flag: 'fi-tn' }, // Tunisie

    // Ajoutez d'autres pays d'Afrique au besoin

    // Pays d'Europe
    { label: 'France', value: '+33', flag: 'fi-fr' },
    { label: 'Allemagne', value: '+49', flag: 'fi-de' },
    { label: 'Royaume-Uni', value: '+44', flag: 'fi-gb' },
    { label: 'Espagne', value: '+34', flag: 'fi-es' }, // Espagne
    { label: 'Portugal', value: '+351', flag: 'fi-pt' }, // Portugal
    { label: 'Belgique', value: '+32', flag: 'fi-be' }, // Belgique
    { label: 'Turquie', value: '+90', flag: 'fi-tr' }, // Turquie
    // Ajoutez d'autres pays d'Europe au besoin

    // Pays d'Amérique du Nord
    { label: 'États-Unis', value: '+1', flag: 'fi-us' },
    { label: 'Canada', value: '+1', flag: 'fi-ca' },
    { label: 'Mexique', value: '+52', flag: 'fi-mx' }
    // Ajoutez d'autres pays d'Amérique du Nord au besoin
  ];
  redirectUrl!: string;
  constructor(
    private http: HttpClient,
    private router :Router) {
  }
  login():void{
    this.token='ismatoken'

  }
  // getToken(): string{
  //   return environment.token
  // }

  /**
   * connexion
   * @param formData
   */
  signUp(formData:FormGroup):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Ajoutez votre jeton d'autorisation si nécessaire
      }),
    };
    const form = new FormData();
    form.append('telephone', formData.value.phoneNumberPrefix + formData.value.phoneNumber);
    form.append('password', formData.value.password);
    form.append('fullName', formData.value.fullName);
    form.append('age',"99");
    form.append('imgUrl',"public/img/avatar.png");
    form.append('role',"user");
    form.append('site_id',`${environment.siteId}`);

    return this.http.post<any>(`${environment.urlApi}/signup`,form)
  }
  logIn(formData:FormGroup):Observable<any> {
    const form = new FormData();
    form.append('telephone', formData.value.phoneNumberPrefix + formData.value.phoneNumber);
    form.append('password', formData.value.password);
    form.append('site_id',`${environment.siteId}`);
    form.append('TOKEN',`${environment.token}`);

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.getToken()
      })
    };

    return this.http.post<any>(`${environment.urlApi}/signin`, form);
  }
  getUserById(userId: number): Observable<User>{
    return this.http.get<User>(`${environment.urlApi}/user/${userId}`)
  }

  //
  // GESTION TOKEN
  public saveToken(token : string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY) !== null ? window.sessionStorage.getItem(TOKEN_KEY) : null;
  }
  public getUser():string | null{
    const jwtToken = this.getToken();
    const decodedToken: any = this.getToken() != null ? jwt_decode(jwtToken as string) : null;
    const userId = decodedToken != null ? decodedToken?.sub : null;
    return userId;
  }
  public getUserId():string | null{
    const jwtToken = this.getToken();
    const decodedToken: any = this.getToken() != null ? jwt_decode(jwtToken as string) : null;
    const userId = decodedToken != null ? decodedToken?.id : null;
    return userId;
  }
  public getRole(){
    const jwtToken = this.getToken();
    const decodedToken: any = this.getToken() != null ? jwt_decode(jwtToken as string) : null;
    const userRole = decodedToken != null ? decodedToken?.role : null;
    return userRole;
  }

  signOut(): void {
    window.sessionStorage.clear();
    this.router.navigate([''])
      .then(() => {
        window.location.reload();
      });
  }


}


