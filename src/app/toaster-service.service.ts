import { Injectable } from '@angular/core';
var toastr: any;
@Injectable({
  providedIn: 'root'
})
export class ToasterServiceService {

  constructor() { }

  Success(title: string, message?: string) {
    toastr.success(title, message)
  }
  Warning(title: string, message?: string) {
    toastr.warning(title, message)
  }
  Error(title: string, message?: string) {
    toastr.error(title, message)
  }
  Info(title: string, message?: string) {
    toastr.info(message)
  }
}
