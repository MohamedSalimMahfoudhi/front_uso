import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { Router } from '@angular/router';
import { ActualitesService } from 'src/app/services/actualites.service';
declare var jQuery: any;

@Component({
  selector: 'app-back-add-actualite',
  templateUrl: './back-add-actualite.component.html',
  styleUrls: ['./back-add-actualite.component.css']
})
export class BackAddActualiteComponent implements OnInit {

  actualiteForm = new FormGroup({
    titreAct: new FormControl(''),
    themeAct: new FormControl(''),
    sujetAct: new FormControl(''),
  })

  constructor(private actualitesService: ActualitesService, private fb: FormBuilder, private router: Router) { }


  ngOnInit(): void {

  
    this.actualiteForm = this.fb.group({
      titreAct: ['', [Validators.required]],
      themeAct: ['', [Validators.required]],
      sujetAct: [ '', [Validators.required]],

    })



  }






  createActualite(): void {
    console.log(this.actualiteForm.value)  
   // if (this.actualiteForm.valid) {
    this.actualitesService.addActualite(this.actualiteForm.value)
      .subscribe({
        next:  async (res) => {
          const id = (res as any).id; // Using type assertion to access id
          await  this.performUpload(id)
          await this.performUploadPdf1(id)
          await this.performUploadPdf2(id)
          await this.performUploadPdf3(id)
          await this.performUploadPdf4(id)

          
         

        },

        error: (e) => console.error(e)
      });
 // }
}




  public formData = new FormData();
  public selectedFile !: File;
  public imageSrc !: string;
  button = document.getElementById('upload');

  onSelectFile(event: any) {
    this.selectedFile = event.target.files[event.target.files.length - 1] as File;
  }

  async performUpload(id: number) {
    if (this.selectedFile ){
      await new Promise(resolve => setTimeout(resolve, 1000));

    this.formData.set('file', this.selectedFile, this.selectedFile.name);
    /*console.log(this.formData.get('file'));
    console.log("route image")
    console.log(this.formData)
    console.log(this.selectedFile)
    console.log(this.selectedFile.name)*/
     this.actualitesService.uploadImageActualite(this.formData,id).subscribe(
       res => {
       //  this.imageSrc = res;
       }
     );
  }
}


public formDataPdf1 = new FormData();
public selectedFilePdf1 !: File;

onSelectFilePdf1(event: any) {
  this.selectedFilePdf1 = event.target.files[event.target.files.length - 1] as File;
}


async performUploadPdf1(id: number) {
  if (this.selectedFilePdf1 ){
    await new Promise(resolve => setTimeout(resolve, 1000));

  this.formDataPdf1.set('file', this.selectedFilePdf1, this.selectedFilePdf1.name);
   this.actualitesService.uploadPdfActualite(this.formDataPdf1,id).subscribe(
     res => {
     //  this.imageSrc = res;
     }
   );
}
}


public formDataPdf2 = new FormData();
public selectedFilePdf2 !: File;

onSelectFilePdf2(event: any) {
  this.selectedFilePdf2 = event.target.files[event.target.files.length - 1] as File;
}

async performUploadPdf2(id: number) {
  if (this.selectedFilePdf2 ){
    await new Promise(resolve => setTimeout(resolve, 1000));

  this.formDataPdf2.set('file', this.selectedFilePdf2, this.selectedFilePdf2.name);
   this.actualitesService.uploadPdfActualite(this.formDataPdf2,id).subscribe(
     res => {
     }
   );
}
}

public formDataPdf3 = new FormData();
public selectedFilePdf3 !: File;

onSelectFilePdf3(event: any) {
  this.selectedFilePdf3 = event.target.files[event.target.files.length - 1] as File;
}
async performUploadPdf3(id: number) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (this.selectedFilePdf3 ){
  this.formDataPdf3.set('file', this.selectedFilePdf3, this.selectedFilePdf3.name);
   this.actualitesService.uploadPdfActualite(this.formDataPdf3,id).subscribe(
     res => {
     }
   );
}
}

public formDataPdf4 = new FormData();
public selectedFilePdf4 !: File;

onSelectFilePdf4(event: any) {
  this.selectedFilePdf4 = event.target.files[event.target.files.length - 1] as File;
}

async performUploadPdf4(id: number) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (this.selectedFilePdf4 ){
  this.formDataPdf4.set('file', this.selectedFilePdf4, this.selectedFilePdf4.name);
   this.actualitesService.uploadPdfActualite(this.formDataPdf4,id).subscribe(
     res => {
     }
   );
}
}

}
