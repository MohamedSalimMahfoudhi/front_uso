import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-home-partenaire',
  templateUrl: './home-partenaire.component.html',
  styleUrls: ['./home-partenaire.component.css']
})
export class HomePartenaireComponent implements OnInit {

  constructor() { }

 
  ngOnInit(): void {
		(function ($) {
			jQuery('.client-logo-carousel').owlCarousel({
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
					
					767:{
						items:3
					},
					1000:{
						items:5
					}
				}
			});
		})(jQuery);
	}

}
