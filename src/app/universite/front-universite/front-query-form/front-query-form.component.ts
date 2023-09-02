import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Reclamation } from '../../../models/reclamation';
import { ReclamationsService } from '../../../services/reclamations.service';

@Component({
  selector: 'app-front-query-form',
  templateUrl: './front-query-form.component.html',
  styleUrls: ['./front-query-form.component.css']
})
export class FrontQueryFormComponent implements OnInit {
  reclamationForm = new FormGroup({
    emailUserR: new FormControl(''),
    nameUserR: new FormControl(''),
    DescriptionRec: new FormControl(''),
    objetRec: new FormControl(''),
  })
  constructor(private reclamationService: ReclamationsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.reclamationForm = this.fb.group({
      emailUserR: ['', [Validators.required]],
      nameUserR: ['', [Validators.required]],
      DescriptionRec: [ '', [Validators.required]],
      objetRec: ['', [Validators.required]],
    })
  }


  createReclamation(): void {
    console.log(this.reclamationForm.value)  
   // if (this.actualiteForm.valid) {
    this.reclamationService.addReclamation(this.reclamationForm.value)
      .subscribe({
        next:  async (res) => {
        
         

          
         

        },

        error: (e) => console.error(e)
      });
 // }
}


}
