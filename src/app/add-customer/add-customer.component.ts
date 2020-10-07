import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  AddCustomer: FormGroup;
  data1;
  submit;
  data2;
  msg;
  messageSuccess: boolean;

  constructor(private authservices: AuthService, private fb: FormBuilder, private router: Router) {
  }

  addcustomer() {
    const user = {
      customer_name: this.AddCustomer.value.customername,
      company_name: this.AddCustomer.value.companyname,
      email_id: this.AddCustomer.value.email,
      email_id1: this.AddCustomer.value.email1,
      contact_no: this.AddCustomer.value.contact,
      contact_no1: this.AddCustomer.value.contact1,
      lead_source: this.AddCustomer.value.leadsource
    };
    if (!this.AddCustomer.value.customername) {
      this.AddCustomer.controls.customername.markAsTouched();
      this.submit = true;
    }
    if (!this.AddCustomer.value.companyname) {
      this.AddCustomer.controls.companyname.markAsTouched();
      this.submit = true;
    }
    if (!this.AddCustomer.value.email) {
      this.AddCustomer.controls.email.markAsTouched();
      this.submit = true;

    }
    if (!this.AddCustomer.value.email1) {
      this.AddCustomer.controls.email1.markAsTouched();
      this.submit = true;

    }
    if (!this.AddCustomer.value.contact) {
      this.AddCustomer.controls.contact.markAsTouched();
      this.submit = true;

    }
    if (!this.AddCustomer.value.contact1) {
      this.AddCustomer.controls.contact1.markAsTouched();
      this.submit = true;

    }
    if (!this.AddCustomer.value.leadsource) {
      this.AddCustomer.controls.leadsource.markAsTouched();
      this.submit = true;

    } else {
      this.authservices.addcustomer(user).subscribe((result) => {
        this.data1 = result;
        this.data2 = this.data1.result;
        console.log(this.data1);
        if (this.data2.success) {
          setTimeout(function () {
            this.messageSuccess = false;
          }, 3000);
          this.AddCustomer.reset();
          this.msg = this.data1.result.msg;
        }
        this.AddCustomer.reset();
        this.router.navigate(['/customerlist']);

      });

    }

    console.log(this.AddCustomer.value);
  }

  ngOnInit() {

    this.AddCustomer = this.fb.group({
      customername: [null, [Validators.required]],
      companyname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      email1: [null, [Validators.required, Validators.email]],
      contact: [null, [Validators.required]],
      contact1: [null, [Validators.required,Validators.maxLength(10)]],
      leadsource: [null, [Validators.required,Validators.maxLength(10)]],

    });
  }
}
