import { Component, OnInit } from '@angular/core';
import { CrewService } from './crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  images: any = [];
  setImage: string;
  constructor(private CrewService: CrewService) {}

  ngOnInit(): void {
    this.CrewService.getJson().subscribe((data) => {
      for (let i = 0; i < 4; i++) {
        const image = data.crew;
        this.images[i] = image[i].images.png;
      }
      console.log(this.images);
    });
  }

  change(i: number) {
    this.setImage = this.images[i];
  }
}
