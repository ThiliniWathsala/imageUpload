import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Imagesave } from './image.model';
import { ImageService } from './image.service';
import { mimeType } from './mime-type.validator';


@Component({
    selector:'app-image',
    templateUrl:'./image.component.html',
    styleUrls:['./image.component.css']
})

export class ImageComponent{
  image:Imagesave;
    form:FormGroup;
  imagePreview:string;

  
  constructor(public imageService:ImageService){}  // used to identify the correct rout path
    
  ngOnInit(){
    this.form= new FormGroup({
            image:new FormControl(null,{validators:[Validators.required],asyncValidators:[mimeType]})
    });
         

  }

  onImagePicked(event:Event){
    const file=(event.target as HTMLInputElement).files[0];      //HTMLINPUTElement is used to identify te incominf file is html file input  and .files come as array so we give 0 eleent ususally   
    this.form.patchValue({image:file});        // patchValue allows to target single control     
    this.form.get('image').updateValueAndValidity();
    const reader= new FileReader();
    reader.onload=()=>{
    this.imagePreview=reader.result as string;
    };
    reader.readAsDataURL(file);
                                           
}




save(){
    if(this.form.invalid){
        return;
    }
    console.log(this.form.value.image);   // to check imageupload
        this.imageService.addPost(this.form.value.image);
   

}


}