import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecoles-doctorales',
  templateUrl: './ecoles-doctorales.component.html',
  styleUrls: ['./ecoles-doctorales.component.css']
})
export class EcolesDoctoralesComponent implements OnInit {
  banner : any = {		
    pagetitle: "Ecoles Doctorales",
    bg_image: "assets/images/banner/bnr1.jpg",
    title: "Ecoles Doctorales",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
