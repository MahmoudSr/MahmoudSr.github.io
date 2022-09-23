import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../technology.service';

@Component({
  selector: 'app-space-capsule',
  templateUrl: './space-capsule.component.html',
  styleUrls: ['./space-capsule.component.scss'],
})
export class SpaceCapsuleComponent implements OnInit {
  dataSpaceCapsule: any = [];
  constructor(private technologyService: TechnologyService) {}

  ngOnInit(): void {
    this.technologyService.getJson().subscribe((data) => {
      // console.log(data.technology);
      this.dataSpaceCapsule = data.technology[1];
      console.log(this.dataSpaceCapsule);
    });
  }
}
