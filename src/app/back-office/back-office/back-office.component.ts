import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent implements OnInit {
  banner : any = {		
    pagetitle: "Services administratifs",
    bg_image: "assets/images/banner/bnradmin.jpg",
    title: "Services administratifs",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
