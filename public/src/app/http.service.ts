import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){}
  getCakes(){
    return this._http.get('/cakes');
  }
  getCake(_id){
    return this._http.get(`/cakes/${_id}/`);
  }
  deleteCake(_id){
    return this._http.delete(`/cakes/${_id}/`);
  }
  addCake(newCake){
    return this._http.post('/cakes', newCake)
  }
  addRating(_id, newRating){
    return this._http.post(`/cakes/${_id}`, newRating);
  }
}

