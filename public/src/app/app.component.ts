import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap.css']
})
export class AppComponent {
  title = 'app';
  newCake;
  this_cake;
  cakes;
  cake;
  this_cakes;
  newRating;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getCakes();
    this.newCake = {name: "", image: ""};
    this.newRating = {name: "", score: ""};
  }

  getCakes(){
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
       console.log("Got our cakes!", data);
       this.cakes = data['data'];
    });
 }

  addCake() {
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe( data => {
      console.log("Post data: ", data);
      this.newCake = {name: "", image: ""};
      this.getCakes();
    })
  }
  getCake(_id){
    let observable = this._httpService.getCake(_id);
    observable.subscribe(data => {
      console.log(data);
      this.this_cake = data['data'];
      console.log('this_cake', this.this_cake);
    })
  }
  deleteCake(_id){
    let observable = this._httpService.deleteCake(_id);
    observable.subscribe(data => {
      console.log("delete this cake", data);
      this.getCakes();
    })
  }
  updateCakeRating(_id){
    let observable = this._httpService.addRating(_id, this.newRating);
      observable.subscribe( data => {
        console.log("New Rating: ", data);
        this.newRating = {name: "", score: ""};
        this.getCakes();
      })
  }

}
