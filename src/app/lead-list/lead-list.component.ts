import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;




@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {

  error_msg = "No Record Found..!";
  AddLead: FormGroup;
  data1;
  data2 = [];
  data3;
  data4;
  delLead_det;
  temp;
  temp1;
  lead_det;
  lead_det1;
  leadList;
  leadList1;;
  messageSuccess;
  cust_det;
  customer;
  submit;
  pagelist: any;

  table = true;
  table2 = false;
  p: number;

  customer_name;
  title;
  fromDate;
  toDate;
  created_by;

  result1;



  constructor(private authservices: AuthService, private fb: FormBuilder, private router: Router) {


    this.authservices.leadlist('').subscribe((result) => {
      this.data1 = result;
      this.data2 = this.data1.result.data;
      console.log(this.data1);
      console.log('0');

    });

    this.authservices.leadlist('')
      .subscribe(result => {
        console.log(result)
        this.lead_det = result;
        this.leadList = this.lead_det.result.data;
      })


  }



  search() {
    if(this.AddLead.value) {
      
    this.authservices.leadlistrecord7().subscribe((result) => {
      this.data1 = result;
      this.data2 = this.data1.result.data;
      console.log(this.data1);
      console.log('0');

    });
  }
    


    if (this.AddLead.value.customer_name && this.AddLead.value.toDate && this.AddLead.value.title && this.AddLead.value.fromDate) {
      const data = {
        fromDate: this.AddLead.value.fromDate,
        toDate: this.AddLead.value.toDate,
        title: this.AddLead.value.title,
        customer_id: this.AddLead.value.customer_name,

      }
      console.log("1");

      this.authservices.leadlistrecord(data)
        .subscribe(result => {

          this.lead_det = result;
          this.leadList = this.lead_det.result.data;
          console.log(this.lead_det.result.success, "success status");
          if (!this.lead_det.result.success) {
            console.log("Not Successfully Search..");

            this.messageSuccess = true;
            setTimeout(() => {
              this.messageSuccess = false;
            }, 2000);
            this.messageSuccess = true;
          }
        })

    } else {
      if (this.AddLead.value.toDate && this.AddLead.value.title && this.AddLead.value.fromDate) {
        const data = {
          fromDate: this.AddLead.value.fromDate,
          toDate: this.AddLead.value.toDate,
          title: this.AddLead.value.title,


        }
        console.log("2");
        this.authservices.leadlistrecord1(data)
          .subscribe(result => {

            this.lead_det = result;
            this.leadList = this.lead_det.result.data;
            console.log(this.lead_det.result.success, "success status");
            if (!this.lead_det.result.success) {
              console.log("Not Successfully Search..");

              this.messageSuccess = true;
              setTimeout(() => {
                this.messageSuccess = false;
              }, 2000);
              this.messageSuccess = true;
            }
          })


      } else {
        if (this.AddLead.value.toDate && this.AddLead.value.fromDate) {
          const data = {
            fromDate: this.AddLead.value.fromDate,
            toDate: this.AddLead.value.toDate,


          }
          console.log("3");
          this.authservices.leadlistrecord2(data)
            .subscribe(result => {

              this.lead_det = result;
              this.leadList = this.lead_det.result.data;
              console.log(this.lead_det.result.success, "success status");
              if (!this.lead_det.result.success) {
                console.log("Not Successfully Search..");

                this.messageSuccess = true;
                setTimeout(() => {
                  this.messageSuccess = false;
                }, 2000);
                this.messageSuccess = true;
              }
            })

        } else {
          if (this.AddLead.value.toDate) {
            const data = {

              toDate: this.AddLead.value.toDate,


            }
            console.log("4");
            this.authservices.leadlistrecord3(data)
              .subscribe(result => {

                this.lead_det = result;
                this.leadList = this.lead_det.result.data;
                console.log(this.lead_det.result.success, "success status");
                if (!this.lead_det.result.success) {
                  console.log("Not Successfully Search..");

                  this.messageSuccess = true;
                  setTimeout(() => {
                    this.messageSuccess = false;
                  }, 2000);
                  this.messageSuccess = true;
                }
              })

          } else {
            if (this.AddLead.value.fromDate) {
              const data = {
                fromDate: this.AddLead.value.fromDate,



              }
              console.log("5");
              this.authservices.leadlistrecord4(data)
                .subscribe(result => {

                  this.lead_det = result;
                  this.leadList = this.lead_det.result.data;
                  console.log(this.lead_det.result.success, "success status");
                  if (!this.lead_det.result.success) {
                    console.log("Not Successfully Search..");

                    this.messageSuccess = true;
                    setTimeout(() => {
                      this.messageSuccess = false;
                    }, 2000);
                    this.messageSuccess = true;
                  }
                })

            } else {
              if ( this.AddLead.value.title) { 
              const data = {
                title: this.AddLead.value.title,



              }
              console.log("6");
              this.authservices.leadlistrecord5(data)
                .subscribe(result => {

                  this.lead_det = result;
                  this.leadList = this.lead_det.result.data;
                  console.log(this.lead_det.result.success, "success status");
                  if (!this.lead_det.result.success) {
                    console.log("Not Successfully Search..");

                    this.messageSuccess = true;
                    setTimeout(() => {
                      this.messageSuccess = false;
                    }, 2000);
                    this.messageSuccess = true;
                  }
                })

            
          

            
          
          }
        }
      }
    }
  }
}

  }

  deletelead(lead_id) {
    console.log(lead_id)

    // delete data from database
    this.authservices.deletelead(lead_id)
      .subscribe(result => {
        //    console.log(result)
        this.delLead_det = result
        this.temp = this.delLead_det.result
        this.temp1 = this.temp.success
        console.log(this.temp1)
        console.log(this.temp, "LeadList")
        if (this.temp) {
          this.authservices.leadlist("")
            .subscribe(result => {
              console.log(result)
              this.lead_det = result;
              this.leadList = this.lead_det.result.data;


            })
        }

      })
  }

  View(lead_id) {
    console.log(lead_id);
    this.router.navigate(['/updatelead/:id', { lead_id: lead_id }])

  }

  ngOnInit() {
    this.AddLead = this.fb.group({
      customer_name: ['', [Validators.required]],
      created_by: ['', Validators.required],
      title: ['', Validators.required],

      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]

    });

    this.authservices.customerlist()
      .subscribe(result => {
        // console.log(result)
        this.cust_det = result;
        this.customer = this.cust_det.result.data;

        // leadpg=this.customer.length
      })

    this.authservices.leadlist('')
      .subscribe(result => {
        console.log(this.lead_det = result)
        this.lead_det = result;
        this.leadList = this.lead_det.result.data;
        if (this.lead_det.success) {
          this.pagelist = this.leadList.length;
          console.log(this.leadList.length, "hello");
        }



      })




  }

}
