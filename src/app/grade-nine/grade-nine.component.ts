import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-nine',
  templateUrl: './grade-nine.component.html',
  styleUrls: ['./grade-nine.component.css']
})
export class GradeNineComponent implements OnInit {

  // eight: any;


  constructor(/*private _httpClient: HttpClient*/) { }

  ngOnInit(): void {
    // this._httpClient.get('http://localhost:3000/grade/nine').subscribe(data => {
    //   this.eight = data;
    // })
  }

}
