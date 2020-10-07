import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-total-lead',
  templateUrl: './total-lead.component.html',
  styleUrls: ['./total-lead.component.css']
})
export class TotalLeadComponent implements OnInit {

  constructor(private authservice: AuthService) { }
data1;
data2;
  ngOnInit() {

    this.authservice.leadlist('').subscribe((result) => {
      this.data1 = result;
      this.data2 = this.data1.result.data;
      console.log(this.data1);
    });
  }

}
