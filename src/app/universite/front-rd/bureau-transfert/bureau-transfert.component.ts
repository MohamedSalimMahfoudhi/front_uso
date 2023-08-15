import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bureau-transfert',
  templateUrl: './bureau-transfert.component.html',
  styleUrls: ['./bureau-transfert.component.css']
})
export class BureauTransfertComponent implements OnInit {
  banner : any = {		
    pagetitle: "Bureau de Transfert Technologique",
    bg_image: "assets/images/banner/bnr1.jpg",
    title: "Bureau de Transfert Technologique",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
