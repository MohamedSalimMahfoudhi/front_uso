import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-home-counter',
  templateUrl: './home-counter.component.html',
  styleUrls: ['./home-counter.component.css']
})
export class HomeCounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
    jQuery('.counter').counterUp({
      delay: 10,
      time: 3000
    });
    
  })(jQuery);
  }

}
