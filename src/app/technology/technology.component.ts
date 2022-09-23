import { Component, OnInit } from '@angular/core';
import { TechnologyService } from './technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit {
  imagesLandscape: any = [];
  imagesPortrait: any = [];

  setImagePortrait: string;
  setImageLandscape: string;

  constructor(private technologyService: TechnologyService) {}

  ngOnInit(): void {
    this.technologyService.getJson().subscribe((data) => {
      for (let i = 0; i < 3; i++) {
        const image = data.technology;
        this.imagesLandscape[i] = image[i].images.landscape;
      }
      for (let i = 0; i < 3; i++) {
        const image = data.technology;
        this.imagesPortrait[i] = image[i].images.portrait;
      }
    });
  }
  change(i: number) {
    this.setImageLandscape = this.imagesLandscape[i];
    this.setImagePortrait = this.imagesPortrait[i];
  }
}
