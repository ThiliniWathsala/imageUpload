
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imagesave } from './image.model';

export class ImageService{
    constructor(private http:HttpClient){}

    addPost(image:File){
        
            const imagedata = new FormData();    //convert data to form data(json object ekak widihata files ywnna be)
           
            imagedata.append("image" , image);
    
            this.http.post<{message:string, post:Imagesave}>('http://localhost:3000/api/posts',imagedata)
            .subscribe((responseData)=>{
                console.log(responseData);
              const image:Imagesave={
                  _id:responseData.post._id,
                  
                  imagePath:responseData.post.imagePath
                };
    

    });

    }
}
