import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorientation',
  templateUrl: './reorientation.component.html',
  styleUrls: ['./reorientation.component.css']
})
export class ReorientationComponent implements OnInit {
    banner : any = {		
      pagetitle: "Reorientation",
      bg_image: "assets/images/banner/bnr5.jpg",
      title: "Reorientation",
    }
  constructor() { }

  ngOnInit(): void {
  }

}
