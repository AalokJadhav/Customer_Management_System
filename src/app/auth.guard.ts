import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { AuthService} from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router) {}

  canActivate() {
    
    if (this.authservice.logedIn()) {

    return true;
    }else{
      this.router.navigate[('/400')]
      return false;
    }
    
  }
  }