import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignement-dist',
  templateUrl: './enseignement-dist.component.html',
  styleUrls: ['./enseignement-dist.component.css']
})
export class EnseignementDistComponent implements OnInit {
  banner : any = {
		    pagetitle: "Enseignants",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Enseignants",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
