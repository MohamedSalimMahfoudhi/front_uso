import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-administratifs',
  templateUrl: './services-administratifs.component.html',
  styleUrls: ['./services-administratifs.component.css']
})
export class ServicesAdministratifsComponent implements OnInit {
  banner : any = {		
    pagetitle: "Services administratifs",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Services administratifs",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
