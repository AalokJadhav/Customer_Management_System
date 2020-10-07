import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css']
})
export class RecaptchaComponent implements OnInit {
  
  myRecaptcha: boolean
  // siteKey: '6Lc9vLEUAAAAAEcrSJMTuab8bj1MZwW_N4a5dCaQ'
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() { 
    
    
  }

  onScriptLoad() {
    console.log('Google reCAPTCHA loaded and is ready for use!');
}

onScriptError() {
    console.log('Something went long when loading the Google reCAPTCHA');
}

resolved(captchaResponse: string) {
  console.log(`Resolved captcha with response: ${captchaResponse}`);
}
    
  }
