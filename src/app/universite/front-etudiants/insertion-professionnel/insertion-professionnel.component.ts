import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertion-professionnel',
  templateUrl: './insertion-professionnel.component.html',
  styleUrls: ['./insertion-professionnel.component.css']
})
export class InsertionProfessionnelComponent implements OnInit {
  banner : any = {		
    pagetitle: "Insertion Professionnel",
    bg_image: "assets/images/banner/bnr5.jpg",
    title: "Insertion Professionnel",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
