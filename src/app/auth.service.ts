import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  postFile(caption: string, image: string, fileToUpload: File) {
    const endpoint  = 'http://localhost:4200/uploadimage';
    const formData: FormData = new FormData();
    formData.append('image', image);
    formData.append('caption', caption);

    return this.http
    .post(endpoint, formData)
    .subscribe((data)=>{console.log(data)});
  }



  Register(user) {

    const data = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      address: user.address

    };

    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=sign_up&firstname=' + data.firstname + '&lastname=' + data.lastname + '&email=' + data.email + '&password=' + data.password + '&address=' + data.address);
  }


  login(user) {
    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=login&email=' + user.email + '&password=' + user.password);
  }

  addcustomer(user) {

    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=add_customer&customer_name=' + user.customer_name + '&company_name=' + user.company_name + '&email_id=' + user.email_id + '&email_id1=' + user.email_id1 + '&contact_no=' + user.contact_no + '&contact_no1=' + user.contact_no1 + '&lead_source=' + user.lead_source);
  }

  customerlist() {
    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=customerlist');
  }

  addlead(user) {
    const user_id = localStorage.getItem('id');
    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=addlead&customer_id=' + user.customer_id + '&title=' + user.title + '&description=' + user.description + '&created_by=' + user_id + '&amount=' + user.amount);
  }

  leadlist(user) {

    const data={
         
      customer_id:user.customer_id,
      title:user.title,
      fromDate:user.fromDate,
      toDate:user.toDate
  
    }
    

    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=leadlist&customer_id='+data.customer_id+"&created_by="+data.title+"&form_date="+data.fromDate+"&to_date="+data.toDate);
  }

  leadlistrecord(user) {

    const data={
         
      customer_id:user.customer_id,
      title:user.title,
      fromDate:user.fromDate,
      toDate:user.toDate
  
    }
    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=leadlist&customer_id='+data.customer_id+'&title='+data.title+'&form_date='+data.fromDate+'&to_date='+data.toDate);

  }
  leadlistrecord1(user) {

    const data={
         
  
      title:user.title,
      fromDate:user.fromDate,
      toDate:user.toDate
  
    }
    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=leadlist&title='+data.title+'&form_date='+data.fromDate+'&to_date='+data.toDate);

  }
  leadlistrecord2(user) {

    const data={
         
    
      fromDate:user.fromDate,
      toDate:user.toDate
  
    }
    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=leadlist&form_date='+data.fromDate+'&to_date='+data.toDate);

  }
  leadlistrecord3(user) {

    const data={
         
     
      toDate:user.toDate
  
    }
    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=leadlist&to_date='+data.toDate);

  }
  leadlistrecord4(user) {

    const data={
         
    
      fromDate:user.fromDate,
     
  
    }
    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=leadlist&form_date='+data.fromDate);

  }


  leadlistrecord5(user) {

    const data={
         
    
      title:user.title,
     
  
    }
   
    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=leadlist&title='+data.title);

  }

  leadlistrecord6(user) {

    const data={
         
    
      customer_id:user.customer_id,
     
  
    }

   
    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=leadlist&customer_id='+data.customer_id);

  }


  leadlistrecord7() {
    // const data={
         
    //   customer_id:user.customer_id,
    //   title:user.title,
    //   fromDate:user.fromDate,
    //   toDate:user.toDate
  
    // }
    

    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=leadlist');
    

  }

  logedIn() {
    return !!localStorage.getItem('id');
  }

  getcustomer() {
    const customer_id = localStorage.getItem('customer_id')


    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=customerlist=');
  }

  getLead(test) {

    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=lead_by_id&lead_id='+test);
  }

  updatelead(user) {

    const data={
      lead_id:user.lead_id,
      customer_id:user.customer_id,
      title:user.title,
      description:user.description,
      amount:user.amount
    }
    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=editlead&lead_id=' +data.lead_id+ "&customer_id=" +data.customer_id+ "&title=" +data.title+ "&description=" + data.description+ "&amount="+data.amount)
  
}

  deletelead(lead_id) {
    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=delete_lead&lead_id='+lead_id)
  }

public uploadImage1(image: File, caption){
 
    const formData = new FormData();
    formData.append('image', image);
    formData.append('caption', caption);
    
    return this.http.post('http://udyotexamples.com/demo_angular/webservice.php?action=upload_image&caption=', formData);
  }

  public uploadImage(image: File) {
    const formData = new FormData();
   
    formData.append('image', image);
    formData.append('caption','caption')
    return this.http.post('http://udyotexamples.com/demo_angular/webservice.php?action=upload_image&caption=',formData);
  }

  imagelist() {
    return this.http.get('http://udyotexamples.com/demo_angular/webservice.php?action=image_list');
  }
  
}
