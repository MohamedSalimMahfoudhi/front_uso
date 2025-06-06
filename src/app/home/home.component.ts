import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
		(function ($) {
			jQuery('.blog-carousel').owlCarousel({
				loop:true,
				autoplaySpeed: 3000,
				navSpeed: 3000,
				paginationSpeed: 3000,
				slideSpeed: 3000,
				smartSpeed: 3000,
				autoplay: 3000,
				margin:30,
				nav:true,
				dots: false,
				navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2
					},			
					991:{
						items:2
					},
					1000:{
						items:3
					}
				}
			});
		})(jQuery);
	}


}
