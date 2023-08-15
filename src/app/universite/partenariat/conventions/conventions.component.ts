import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conventions',
  templateUrl: './conventions.component.html',
  styleUrls: ['./conventions.component.css']
})
export class ConventionsComponent implements OnInit {
  banner: any = {
    pagetitle: "Conventions",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Conventions",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
