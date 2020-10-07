import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  data: [] = [];
  data1;
  imageGallery: any;
  demo = [];
  data2;
  imageurl;
  demo1;
  splits;
  data3: any = [];
  data4;
  imgurl = 'http://udyotexamples.com/demo_angular/';
  caption: any;
  constructor(private authservices: AuthService) {

    this.imageGallery = this.authservices.imagelist();

    this.authservices.imagelist().subscribe((result) => {

      this.data1 = result;
      console.log(this.data1);

      this.data2 = this.data1.result.data;
      console.log(this.data2);

      this.caption = this.data2[0].caption
      console.log(this.caption);
      

      console.log('Total Images =', this.data2.length);

      for (let i = 0; i < this.data2.length; i++) {
        this.data3.push(this.data2[i].u_image);
        console.log(this.data3);

        // this.data4 = this.data3.splits;
      }
      // console.log(this.data4);


    })



  }

  ngOnInit() {

  }

}
