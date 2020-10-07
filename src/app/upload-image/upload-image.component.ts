import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  imageUrl: string = "assets/images/default-placeholder.png";
  imageService: any;
  Uploadimage: FormGroup;
  data1;
  data2;
  string;
  res;
  successmsg;
  msg;
  error_msg1;
  image: string;
  caption: string;
  selectedFile1: ImageSnippet;
  fileToUpload : File = null;
  
 

  constructor(private authservices: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {



    this.Uploadimage = this.fb.group({
      caption: ['', [Validators.required]],
      image: ['', ]


    });
  }


  handleFileInput(file: FileList) {


     this.fileToUpload = file.item(0);
    console.log(this.fileToUpload);
    var reader = new FileReader();

    // Show Image Preview
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
      reader.readAsDataURL(this.fileToUpload);


    reader.addEventListener ('load',(event: any) => {
      this.selectedFile1 = new ImageSnippet (event.target.result, this.fileToUpload)
    
    // console.log(this.imageUrl);
    
    })

    reader.readAsDataURL(this.fileToUpload);
  }

 upload() {

    
    if (this.Uploadimage.value) {
      const data = {
        caption: this.Uploadimage.value.caption,
        image:this.fileToUpload

      }
       this.authservices.uploadImage1(this.fileToUpload, this.Uploadimage.value.caption).subscribe((result) => {
        this.data1 = result;
        this.data2 = this.data1.result;

        this.string = btoa(this.data1);
        console.log(this.string);
        console.log(this.data1);
        console.log('0');
        console.log(data);
        console.log(this.data2);
       this.res = this.string;


        if (this.data2.success) {
          this.successmsg = " Upload Successfully ";

          this.msg = this.data1.result.msg;


        } else {
          this.error_msg1 = this.data1.result.error_msg1
        }
        this.router.navigate(['/imagelist']);


      })

    }
  } 
}
