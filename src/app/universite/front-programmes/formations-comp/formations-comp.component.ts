import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formations-comp',
  templateUrl: './formations-comp.component.html',
  styleUrls: ['./formations-comp.component.css']
})
export class FormationsCompComponent implements OnInit {
  banner: any = {
    pagetitle: "Enseignants",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Enseignants",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
