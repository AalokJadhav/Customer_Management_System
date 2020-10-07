import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  data1;
  data2;
  data3;
  submit;
  loginmsg;
  error_msg: any;
  err: boolean;
  passwordType;
  messageSuccess: boolean = true;
  constructor(private authservices: AuthService, private fb: FormBuilder, private router: Router) {
  }

  LoginForm1() {


    console.log(this.LoginForm.value);
  }



  login() {
    const user = {
      email: this.LoginForm.value.email,
      password: this.LoginForm.value.password
    };
    if (!this.LoginForm.value.email) {
      this.LoginForm.controls.email.markAsTouched();
      this.submit = true;
    }
    if (!this.LoginForm.value.password) {
      this.LoginForm.controls.password.markAsTouched();
      this.submit = true;
    } else {
      this.authservices.login(user).subscribe((data) => {
        this.data1 = data;
        this.data2 = this.data1.result;
        this.data3 = this.data1.result.data;
        console.log(this.data1);
        if (this.data2.success) {
          setTimeout(function() {
            
            this.loginmsg = 'Successfully Login';
          }, 3000);
          this.messageSuccess = false;
          localStorage.setItem('id', this.data3.id);
          this.router.navigate(['/dashboard']);
        } else {

          this.error_msg = this.data1.result.error_msg;
          this.err = true;


        }
      });

    }

    console.log(this.LoginForm.value);
  }

  signup() {
    this.router.navigate(['/login']);
  }

  togglePasswordType() {
    this.passwordType = this.passwordType || 'password';
    this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
  }
  ngOnInit() {
    this.LoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });


  }


}
