import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.css']
})
export class AddLeadComponent implements OnInit {

  AddLead: FormGroup;
  data1;
  submit;
  data2;
  data3;
  data4
  msg;
  error_msg1;
  successmsg;
  constructor(private authservices: AuthService, private fb: FormBuilder, private router: Router) {
    this.authservices.customerlist().subscribe((result) => {
      this.data3 = result;
      this.data4 = this.data3.result.data;
      console.log('Customer Name:',this.data4[0].customer_name);
      if (this.data4.success) {
        localStorage.setItem('customer_id', this.data4[0].customer_id);

      }
    })
    
  }

  addlead() {
    const user = {
      customer_id: this.AddLead.value.customer_name,
      title: this.AddLead.value.title,
      description: this.AddLead.value.description,
      created_by: this.AddLead.value.createdby,
      amount: this.AddLead.value.amount
    }
    if (!this.AddLead.value.customer_name) {
      this.AddLead.controls.customer_name.markAsTouched();
      this.submit = true;
    }
    if (!this.AddLead.value.title) {
      this.AddLead.controls.title.markAsTouched();
      this.submit = true;
    }
    if (!this.AddLead.value.description) {
      this.AddLead.controls.description.markAsTouched();
    }
    if (!this.AddLead.value.amount) {
      this.AddLead.controls.amount.markAsTouched();
    }
    else {
      this.authservices.addlead(user).subscribe((result) => {
        this.data1 = result;
        this.data2 = this.data1.result;
        console.log(this.data1);
        
        if (this.data2.success) {
          this.AddLead.reset();
          this.successmsg = " Added Successfully ";

          this.msg = this.data1.result.msg;


        } else {
          this.error_msg1 = this.data1.result.error_msg1
        }
        this.router.navigate(['/leadlist']);

      });
    }


    console.log(this.AddLead.value);
  }

  ngOnInit() {

    this.AddLead = this.fb.group({
      customer_name: [null, [Validators.required]],
      title: [null, Validators.required],
      description: [null, Validators.required],
      amount: [null, Validators.required]

    });
  }
}
