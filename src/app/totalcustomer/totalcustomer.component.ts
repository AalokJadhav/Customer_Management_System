import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-totalcustomer',
  templateUrl: './totalcustomer.component.html',
  styleUrls: ['./totalcustomer.component.css']
})
export class TotalcustomerComponent implements OnInit {

  constructor(private authservice: AuthService) { }
  data1;
  data2;
  ngOnInit() {

    this.authservice.customerlist().subscribe((result) => {
      this.data1 = result;
      this.data2 = this.data1.result.data;
      console.log(this.data1);

    });

  }

}
