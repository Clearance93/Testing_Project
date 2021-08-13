import { Eight } from './../model/eight';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grade-eight',
  templateUrl: './grade-eight.component.html',
  styleUrls: ['./grade-eight.component.css']
})
export class GradeEightComponent implements OnInit {

  eight: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/grade/eight').subscribe(data => {
      this.eight = data;
    })
  }

}
