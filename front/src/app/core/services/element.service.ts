import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Root} from "../models/element.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  cards: any[] = [
    {
      "id": "1",
      "type": "Appartement",
      "description": "Superbe appartement de luxe avec vue sur la ville, 3 chambres, 2 salles de bain, cuisine équipée, salon spacieux, parking sécurisé.",
      "price": "120 000",
      "location": "Conackry, kipee",
      "surface": "18",
      "verified": "0",
      "stars":"4",
      "images":[
        {
          "id":"1",
          "src": "data:image/jpeg;base64,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"
        },
        {
          "id":"2",
          "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/520px-Bill_Gates_-_Nov._8%2C_2019.jpg"

        },
        {
          "id":"3",
          "src": "https://www.babelio.com/users/AVT_Steve-Jobs_8163.jpg",
        },
        {
          "id":3,
          "src": "data:image/jpeg;base64,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"
        }
      ]
    },
    {
      "id": 2,
      "type": "Hotel",
      "description": "Superbe Hotel de luxe avec vue sur la ville, 3 chambres, 2 salles de bain, cuisine équipée, salon spacieux, parking sécurisé.",
      "price": "20 000",
      "location": "Conackry, kipee",
      "surface": "18",
      "verified": "1",
      "stars":"4",
      "images":[
        {
          id:1,
          src: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/scientist/persov6/Gates-1000.jpg',
        },
        {
          id:2,
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/520px-Bill_Gates_-_Nov._8%2C_2019.jpg',

        },
        {
          id:3,
          src: 'https://www.babelio.com/users/AVT_Steve-Jobs_8163.jpg',
        },
        {
          id:3,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKDlhyG4y70hTVIESUYSQ75mdVppnz3MMZrjV3JO1g8cw3jEwfSj__Tu1tO5O2FA6w9o&usqp=CAU',
        }
      ]
    },


    {
      "id": 3,
      "type": "Appartement",
      "description": "Superbe appartement de luxe avec vue sur la ville, 3 chambres, 2 salles de bain, cuisine équipée, salon spacieux, parking sécurisé.",
      "price": "30 000",
      "location": "Conackry, kipee",
      "surface": "38",
      "verified": "0",
      "stars":"4",
      "images":[
        {
          id:1,
          src: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/scientist/persov6/Gates-1000.jpg',
        },
        {
          id:2,
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/520px-Bill_Gates_-_Nov._8%2C_2019.jpg',

        },
        {
          id:3,
          src: 'https://www.babelio.com/users/AVT_Steve-Jobs_8163.jpg',
        },
        {
          id:3,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKDlhyG4y70hTVIESUYSQ75mdVppnz3MMZrjV3JO1g8cw3jEwfSj__Tu1tO5O2FA6w9o&usqp=CAU',
        }
      ]
    },

    {
      "id": 4,
      "type": "Hotel",
      "description": "Superbe Hotel de luxe avec vue sur la ville, 3 chambres, 2 salles de bain, cuisine équipée, salon spacieux, parking sécurisé.",
      "price": "420 000",
      "location": "Conackry, kipee",
      "surface": "48",
      "verified": "0",
      "stars":"4",
      "images":[
        {
          id:1,
          src: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/scientist/persov6/Gates-1000.jpg',
        },
        {
          id:2,
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/520px-Bill_Gates_-_Nov._8%2C_2019.jpg',

        },
        {
          id:3,
          src: 'https://www.babelio.com/users/AVT_Steve-Jobs_8163.jpg',
        },
        {
          id:3,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKDlhyG4y70hTVIESUYSQ75mdVppnz3MMZrjV3JO1g8cw3jEwfSj__Tu1tO5O2FA6w9o&usqp=CAU',
        }
      ]
    },

    {
      "id": 5,
      "type": "Hotel",
      "description": "Superbe Hotel de luxe avec vue sur la ville, 3 chambres, 2 salles de bain, cuisine équipée, salon spacieux, parking sécurisé.",
      "price": "520 000",
      "location": "Conackry, kipee",
      "surface": "58",
      "verified": "1",
      "stars":"4",
      "images":[
        {
          id:1,
          src: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/scientist/persov6/Gates-1000.jpg',
        },
        {
          id:2,
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/520px-Bill_Gates_-_Nov._8%2C_2019.jpg',

        },
        {
          id:3,
          src: 'https://www.babelio.com/users/AVT_Steve-Jobs_8163.jpg',
        },
        {
          id:3,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKDlhyG4y70hTVIESUYSQ75mdVppnz3MMZrjV3JO1g8cw3jEwfSj__Tu1tO5O2FA6w9o&usqp=CAU',
        }
      ]
    },

    {
      "id": 6,
      "type": "Hotel",
      "description": "Superbe Hotel de luxe avec vue sur la ville, 3 chambres, 2 salles de bain, cuisine équipée, salon spacieux, parking sécurisé.",
      "price": "620 000",
      "location": "Conackry, kipee",
      "surface": "68",
      "verified": "1",
      "stars":"4",
      "images":[
        {
          id:1,
          src: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/scientist/persov6/Gates-1000.jpg',
        },
        {
          id:2,
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/520px-Bill_Gates_-_Nov._8%2C_2019.jpg',

        },
        {
          id:3,
          src: 'https://www.babelio.com/users/AVT_Steve-Jobs_8163.jpg',
        },
        {
          id:3,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKDlhyG4y70hTVIESUYSQ75mdVppnz3MMZrjV3JO1g8cw3jEwfSj__Tu1tO5O2FA6w9o&usqp=CAU',
        }
      ]
    }
  ]



  constructor(private http: HttpClient) { }


  getAllElements(): Observable<Root[]> {
    return this.http.get<Root[]>(`${environment.urlApi}/elements`)
  }

  getElementById(elementId: number): Observable<Root>{ //@todo created  slug properties
    return this.http.get<Root>(`${environment.urlApi}/element/${elementId}`)
  }
  getElementByUserId(userId: number): Observable<Root[]>{
    return this.http.get<Root[]>(`${environment.urlApi}/elements/user/${userId}`)
  }


  /**
   * nouvelle enregistrement
   * @param formData
   */
  add(formData:FormData):Observable<any>{
    return this.http.post<any>(`${environment.urlApi}/element/add`,formData)
  }
  remove(elementId:number):Observable<any>{
    return this.http.get<any>(`${environment.urlApi}/element/delete/${elementId}`) //@todo replace by http.delete
  }

}
