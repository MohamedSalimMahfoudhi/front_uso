import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organigramme',
  templateUrl: './organigramme.component.html',
  styleUrls: ['./organigramme.component.css']
})
export class OrganigrammeComponent implements OnInit {
  banner : any = {		
    pagetitle: "Organigramme",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Organigramme",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
