import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquetes',
  templateUrl: './enquetes.component.html',
  styleUrls: ['./enquetes.component.css']
})
export class EnquetesComponent implements OnInit {
  banner : any = {		
    pagetitle: "Enquêtes",
    bg_image: "assets/images/banner/bnr5.jpg",
    title: "Enquêtes",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
