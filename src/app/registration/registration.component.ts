import { Eight } from './../model/eight';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  eight: Eight = new Eight();
  id: any;

  constructor(private _htppClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  submittingData(){
    this._htppClient.post('http://localhost:3000/grade/eight', this.eight).subscribe(data => {
      console.log(data)
      alert('registration was successful');
      this._router.navigate(['/grade-eight'])
    }, err => {
      console.error(err);
    })
  }

}
