import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mutation',
  templateUrl: './mutation.component.html',
  styleUrls: ['./mutation.component.css']
})
export class MutationComponent implements OnInit {
  banner : any = {		
    pagetitle: "Mutation",
    bg_image: "assets/images/banner/bnr5.jpg",
    title: "Mutation",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
