
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imagesave } from './image.model';

export class ImageService{
    constructor(private http:HttpClient){}


//update image..methana id ekata logwena user id eka pass krnna
    
    upDateImage(id:string,image:File | string){
      //const post:Posts={_id:id,title:title,content:content,imagePath:null};
      let postData: Imagesave | FormData;
      
          postData= new FormData();
          postData.append("_id",id);          //append krnne files json object kenna
            
          postData.append("image",image);         //create form data object if send a file
        


      
      this.http.put("http://localhost:3000/api/image/"+id,postData)
      .subscribe(respose=>{console.log(respose);
     

      
  });
  } 









}
