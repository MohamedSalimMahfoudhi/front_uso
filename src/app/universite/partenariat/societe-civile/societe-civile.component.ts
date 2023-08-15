import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-societe-civile',
  templateUrl: './societe-civile.component.html',
  styleUrls: ['./societe-civile.component.css']
})
export class SocieteCivileComponent implements OnInit {
  banner: any = {
    pagetitle: "Société civile",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Société civile",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
