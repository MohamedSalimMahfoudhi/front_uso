import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universite-chiffres',
  templateUrl: './universite-chiffres.component.html',
  styleUrls: ['./universite-chiffres.component.css']
})
export class UniversiteChiffresComponent implements OnInit {
  banner : any = {		
    pagetitle: "Universite chiffres",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Universite chiffres",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
