import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
  banner: any = {
    pagetitle: "Entreprise",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Entreprise",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
