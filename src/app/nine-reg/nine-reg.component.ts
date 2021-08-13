import { Nine } from './../model/nine';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nine-reg',
  templateUrl: './nine-reg.component.html',
  styleUrls: ['./nine-reg.component.css']
})
export class NineRegComponent implements OnInit {

  // nine: Nine = new Nine();

  constructor(/*private _httpClient: HttpClient, private _router: Router*/) { }

  ngOnInit(): void {
  }

  // submitting(){
  //   this._httpClient.post('http://localhost:3000/nine', this.nine).subscribe(data => {
  //     console.log(data)
  //     alert('learner added successfully');
  //     this._router.navigate(['/grade-nine'])
  //   })
  // }

}
