import { Component, OnInit } from '@angular/core';
import {ActualitesService} from "../../services/actualites.service";
import {Actualite}from "../../models/actualites"

declare  var jQuery:  any;
@Component({
  selector: 'app-home-actualites',
  templateUrl: './home-actualites.component.html',
  styleUrls: ['./home-actualites.component.css']
})
export class HomeActualitesComponent implements OnInit {
	actualites  !:  Actualite[] ;

  constructor(private actualitesService: ActualitesService) { }

  ngOnInit(): void {
		this.findTop3Act();
			

	}
	findTop3Act(): void {
		this.actualitesService.findTop3Act()
		  .subscribe(
			data => {
			  this.actualites = data;
			},
			error => {
			  console.log(error);
			});
		  
	  }

}
