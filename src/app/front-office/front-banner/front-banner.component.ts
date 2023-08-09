import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-banner',
  templateUrl: './front-banner.component.html',
  styleUrls: ['./front-banner.component.css']
})
export class FrontBannerComponent implements OnInit {
	@Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
