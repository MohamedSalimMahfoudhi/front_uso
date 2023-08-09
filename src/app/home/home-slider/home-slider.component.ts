import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
declare  var dz_rev_slider_3:  any;

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
	  (function ($) {
        dz_rev_slider_3();
    })(jQuery);
  }
}
