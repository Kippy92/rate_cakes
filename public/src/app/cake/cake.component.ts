import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['../bootstrap.css']
})
export class CakeComponent implements OnInit {
  @Input() cakeToShow: any;
  constructor() { }

  ngOnInit() {
  }

}
