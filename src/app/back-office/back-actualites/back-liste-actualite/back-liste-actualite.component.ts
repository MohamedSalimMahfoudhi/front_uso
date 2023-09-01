import { Component, OnInit } from '@angular/core';
import { Actualite } from 'src/app/models/actualites';
import { ActualitesService } from 'src/app/services/actualites.service';
declare  var jQuery:  any;

@Component({
  selector: 'app-back-liste-actualite',
  templateUrl: './back-liste-actualite.component.html',
  styleUrls: ['./back-liste-actualite.component.css']
})
export class BackListeActualiteComponent implements OnInit {
  actualitesPage : any[] = [];;
	actualites: Actualite[];	
	pageSize: number = 6;
	currentPage: number = 1;
	nextCurrentPage: number = this.currentPage+1;
	totalPages: number;
	keyword: string="";
  constructor(private actualitesService: ActualitesService) { }

  ngOnInit(): void {
	(function ($) {
			
		jQuery("input[name='demo_vertical2']").TouchSpin({
		  verticalbuttons: true,
		  verticalupclass: 'ti-plus',
		  verticaldownclass: 'ti-minus'
		});
		
	})(jQuery);
    this.getActualitesPage(this.keyword, this.currentPage, this.pageSize);	

  }


  getActualitesPage(keyword:string,page: number, size: number) {
		this.actualitesService.getActualitesPageSearch(keyword,page - 1, size).subscribe(
		  response => {
			this.actualites = response.content;
			this.totalPages = response.totalPages;
			console.log('array:',response.content)
			console.log('page:',response.totalPages)

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
