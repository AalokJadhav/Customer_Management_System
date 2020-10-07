import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from "@angular/router";


@Component({
  selector: 'app-update-lead',
  templateUrl: './update-lead.component.html',
  styleUrls: ['./update-lead.component.css']
})
export class UpdateLeadComponent implements OnInit {

  UpdateLead: FormGroup;
  data1;
  data2 = [];
  data3;
  data4;
  test: any;
  test1;
  leaddemo;
  leaddemo1;
  resposne: any;
  msg;
  successMsg;
  error_msg1;
  messageSuccess: boolean;
  cust_det;
  customer;

  constructor(private authservices: AuthService, private fb: FormBuilder, private router: Router, public route: ActivatedRoute) {

    this.authservices.leadlist('').subscribe((result) => {
      this.data1 = result;
      this.data2 = this.data1.result.data;
      console.log(this.data1);
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log(paramMap);
      this.test = paramMap.get("lead_id")
      console.log("paramMap", this.test);
    });

  }


  View(lead_id) {
    console.log(lead_id);
    this.router.navigate(['/updatelead', { lead_id }])

  }

  ngOnInit() {

    this.UpdateLead = this.fb.group({
      customer_name: [null, [Validators.required]],
      title: [null, Validators.required],
      description: [null, Validators.required],
      amount: [null, Validators.required]

    });

    this.authservices.customerlist()
    .subscribe(result=>{
      console.log(result)
      this.cust_det=result;
      this.customer=this.cust_det.result.data;
      console.log(this.customer[0].customer_name);
    })

    this.authservices.getLead( this.test )

      .subscribe(data => {
        this.leaddemo = data
        this.leaddemo1 = this.leaddemo.result.data
        console.log(this.leaddemo, "hello")
        if (this.leaddemo.result.success) {
          this.test1 = this.leaddemo1[0].customer_name
          this.test = this.leaddemo1[0].lead_id
          console.log(this.leaddemo1[0].customer_name)  
          this.UpdateLead.patchValue({

            customer_name: this.leaddemo1[0].customer_id,
            title: this.leaddemo1[0].title,
            amount: this.leaddemo1[0].amount,
            description: this.leaddemo1[0].description,

          });
        }

      })
    
  }
    
  


  updateLead() 
  {
    if(this.test){
   
      if(!this.UpdateLead.value.customer_name){
       this.UpdateLead.controls['customer_name'].markAsTouched()
     }
     if(!this.UpdateLead.value.title){
       this.UpdateLead.controls['title'].markAsTouched()
     }
     if(!this.UpdateLead.value.amount){
      this.UpdateLead.controls['amount'].markAsTouched()
    }
    if(!this.UpdateLead.value.description){
      this.UpdateLead.controls['description'].markAsTouched()
    }
    
    else{
      console.log(this.UpdateLead.value.customer_name);
      const data={
        lead_id:this.test,
        customer_id:this.UpdateLead.value.customer_name,
        title:this.UpdateLead.value.title,
        amount:this.UpdateLead.value.amount,
        description:this.UpdateLead.value.description,
        
   
       }
      //  console.log(data);
      this.messageSuccess = true;

       
       this.authservices.updatelead(data)
     .subscribe(data => {
           this.resposne=data
           this.resposne=this.resposne.result
           console.log(this.UpdateLead.value)
           if(this.resposne.success){
            setTimeout(()=>{

              this.messageSuccess = false;
         }, 3000);
         this.router.navigate(['/leadlist']);
        }
        this.msg="Lead Updated successfully";

            this.UpdateLead.reset()
            
  
            
   });
    }
  }

  else{
    console.log(this.UpdateLead.value)
      const data={
       customer_id:this.UpdateLead.value.customer_name,
        title:this.UpdateLead.value.title,
        amount:this.UpdateLead.value.amount,
        description:this.UpdateLead.value.description,
        
       }
       
       if(!this.UpdateLead.value.customer_name){
         this.UpdateLead.controls['customer_name'].markAsTouched()
       }
       if(!this.UpdateLead.value.title){
         this.UpdateLead.controls['title'].markAsTouched()
       }
       if(!this.UpdateLead.value.amount){
         this.UpdateLead.controls['amount'].markAsTouched()
       }
       if(!this.UpdateLead.value.description){
         this.UpdateLead.controls['description'].markAsTouched()
       }
      
       else{
       console.log(data)
      this.authservices.addlead(data)
      .subscribe(data => {
            this.resposne=data
            this.resposne=this.resposne.result
            if(this.resposne.success){
             this.successMsg="Added successfully"}
             this.UpdateLead.reset()
   
    
      
    
    });
   }
   } 
  }

}
