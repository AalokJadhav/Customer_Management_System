import { AuthService } from './../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  RegisterForm: FormGroup;
  data;
  data1;
  data2;
  submit;
  msg;
  error;
  passwordType;
  messageSuccess: boolean;
  constructor(private authservices: AuthService, private fb: FormBuilder, private router: Router) {
  }





  signup() {
    const data = {
      firstname: this.RegisterForm.value.firstname,
      lastname: this.RegisterForm.value.lastname,
      email: this.RegisterForm.value.email,
      password: this.RegisterForm.value.password,
      address: this.RegisterForm.value.address,
    };
    if (!this.RegisterForm.value.firstname) {
      this.RegisterForm.controls.firstname.markAsTouched();
      this.submit = true;
    }
    if (!this.RegisterForm.value.lastname) {
      this.RegisterForm.controls.lastname.markAsTouched();
      this.submit = true;
    }
    if (!this.RegisterForm.value.email) {
      this.RegisterForm.controls.email.markAsTouched();
      this.submit = true;
    }
    if (!this.RegisterForm.value.password) {
      this.RegisterForm.controls.password.markAsTouched();
      this.submit = true;
    } else {

      // tslint:disable-next-line:no-shadowed-variable
      this.authservices.Register(data).subscribe((data) => {
        this.data1 = data;
        this.data2 = this.data1.result;
        console.log(this.data1);
        if (this.data2.success) {
          setTimeout(function(){
            this.messageSuccess = false;
           

          },3000);
          this.RegisterForm.reset();
          this.msg = "success";


          this.router.navigate(['/login']);
        }
        else {
          this.error = this.data1.result.error;

        }


      });
    }

    console.log(this.RegisterForm.value);
  }

  login() {
    this.router.navigate(['/login']);
  }

  togglePasswordType() {
    this.passwordType = this.passwordType || 'password';
    this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
  }

  ngOnInit() {
    this.RegisterForm = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.maxLength(6)]],
      address: [null, Validators.required],
    });
  }

}
