import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {
  banner: any = {
    pagetitle: "Enseignants",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Enseignants",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
