import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actualite } from 'src/app/models/actualites';
import { ActualitesService } from 'src/app/services/actualites.service';

@Component({
  selector: 'app-detail-actualite',
  templateUrl: './detail-actualite.component.html',
  styleUrls: ['./detail-actualite.component.css']
})
export class DetailActualiteComponent implements OnInit {
  actualite: Actualite;
  actualiteId: number;
  banner: any = {
    pagetitle: "Détail d'Actualité",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Détail d'Actualité",
  }
  layout: any = {
    sidebar: false,
    sidebarPosition: "",
    container_class: "min-container"
  }
  constructor(private actualitesService: ActualitesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.actualiteId = +params['id'];
      this.fetchActualiteById(this.actualiteId);
    });
  }

  fetchActualiteById(id: number) {
    this.actualitesService.getActualiteById(id)
      .subscribe(actualite => {
        this.actualite = actualite;
      });
  }





}
