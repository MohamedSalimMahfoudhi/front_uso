import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-universite-banner',
  templateUrl: './universite-banner.component.html',
  styleUrls: ['./universite-banner.component.css']
})
export class UniversiteBannerComponent implements OnInit {
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
