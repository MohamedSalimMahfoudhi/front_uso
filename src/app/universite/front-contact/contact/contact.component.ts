import { Component, OnInit } from '@angular/core';
import {ReclamationService}from '../reclamation.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  banner : any = {
		
		pagetitle: "Contact Us 2",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Contact Us 2",
	}
 

  srcMaps :string= 'https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d3194.571220306283!2d10.176121565290051!3d36.804829679947666!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m4!2s35.83821111230588%2C10.607339954182429!3m2!1d36.804899999999996!2d10.1778!4m4!2s35.83821111230588%2C10.607339954182429!3m2!1d36.804899999999996!2d10.178799999999999!5e0!3m2!1sfr!2stn!4v1670698969938!5m2!1sfr!2stn'

  constructor(private ReclamationService: ReclamationService) { }

  ngOnInit(): void {

  }
  



}
