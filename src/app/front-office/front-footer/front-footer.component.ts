import { Component, OnInit } from '@angular/core';
import { ActualitesService } from 'src/app/services/actualites.service';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-front-footer',
  templateUrl: './front-footer.component.html',
  styleUrls: ['./front-footer.component.css']
})
export class FrontFooterComponent implements OnInit {
  email !:string;
  constructor(private actualitesService: ActualitesService) { }

  ngOnInit(): void {
  }

  addEmail(f:NgForm){
   
    if (f.valid ) {
     
      this.actualitesService.addEmail(this.email)
        .subscribe({
          next: (res) => {          
            console.log(res);     
          },
          error: (e) => console.error(e)
        });

    }
    

  

  }
}
