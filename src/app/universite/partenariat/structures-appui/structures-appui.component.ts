import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structures-appui',
  templateUrl: './structures-appui.component.html',
  styleUrls: ['./structures-appui.component.css']
})
export class StructuresAppuiComponent implements OnInit {
  banner: any = {
    pagetitle: "Structures D'appui",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Structures D'appui",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
