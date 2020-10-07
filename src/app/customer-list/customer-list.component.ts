import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
declare var $: any;


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  data1;
  data2;
  p: number;
  constructor(private authservice: AuthService) {
    

    this.authservice.customerlist().subscribe((result) => {
      this.data1 = result;
      this.data2 = this.data1.result.data;
      console.log(this.data1);
      localStorage.Item('customer_id');

    });
  }

  ngOnInit() {
  }

}
