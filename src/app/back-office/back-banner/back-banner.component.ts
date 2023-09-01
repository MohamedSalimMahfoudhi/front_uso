import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-back-banner',
  templateUrl: './back-banner.component.html',
  styleUrls: ['./back-banner.component.css']
})
export class BackBannerComponent implements OnInit {
	@Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
