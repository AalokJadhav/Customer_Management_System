import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http: HttpClient) { }

  postFile(caption: string, fileToUpload: File)  {
    const formData: FormData = new FormData();

    const endpoint  = 'http://localhost:4200/uploadimage';
    formData.append('image', fileToUpload, fileToUpload.name);
    formData.append('caption', caption);

    return this.http
    .post(endpoint, formData)
    .subscribe((data)=>{console.log(data)});
  }
}
