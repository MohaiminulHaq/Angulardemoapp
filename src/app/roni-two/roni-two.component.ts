import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roni-two',
  templateUrl: './roni-two.component.html',
  styleUrls: ['./roni-two.component.css']
})
export class RoniTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gotoRoni(value: string): void{
    console.log(value);
  }
}
