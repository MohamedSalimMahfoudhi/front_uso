import { Component, OnInit } from '@angular/core';
import { Actualite } from '../models/actualites';
import { ActualitesService } from '../services/actualites.service';
import { NgModule } from '@angular/core';

declare  var jQuery:  any;
@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {
	actualitesPage : any[] = [];;
	actualites: Actualite[];
	
	pageSize: number = 6;
	currentPage: number = 1;
	nextCurrentPage: number = this.currentPage+1;
	totalPages: number;
	keyword: string="";

	
banner : any = {
		
	pagetitle: "Actualités",
	bg_image: "assets/images/banner/bnr2.jpg",
	title: "Actualités",
}

  
  constructor(private actualitesService: ActualitesService) { }
 
	ngOnInit(): void {
	    this.getActualitesPage(this.keyword, this.currentPage, this.pageSize);	
	
		
	}


	onInputChange(event: any) {
		
		const changedValue = event.target.value;
		this.currentPage=1;
		this.nextCurrentPage = this.currentPage+1;
		this.getActualitesPage(changedValue, this.currentPage, this.pageSize);	
	  }

	getActualitesPage(keyword:string,page: number, size: number) {
		this.actualitesService.getActualitesPageSearch(keyword,page - 1, size).subscribe(
		  response => {
			this.actualites = response.content;
			this.totalPages = response.totalPages;

		  },
		  error => {
			console.log('Error fetching data:', error);
		  }
		);
	  }

	  onPreviousPage() {
		if (this.currentPage > 1) {
		  this.currentPage--;
		  this.getActualitesPage(this.keyword,this.currentPage, this.pageSize);
		  this.nextCurrentPage=this.currentPage+1;
		}
	  }
	
	  onNextPage() {
		if (this.currentPage < this.totalPages) {
		  this.currentPage++;
		  this.getActualitesPage(this.keyword,this.currentPage, this.pageSize);
		  this.nextCurrentPage=this.currentPage+1;
		}
	  }

	  selectPage(){
		if (this.nextCurrentPage <= this.totalPages) {			
			this.getActualitesPage(this.keyword,this.nextCurrentPage, this.pageSize);
			this.currentPage=this.nextCurrentPage
			this.nextCurrentPage++
		  }
	  }

}
