import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorats',
  templateUrl: './doctorats.component.html',
  styleUrls: ['./doctorats.component.css']
})
export class DoctoratsComponent implements OnInit {
  banner: any = {
    pagetitle: "Enseignants",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Enseignants",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
