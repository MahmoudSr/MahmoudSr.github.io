import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../technology.service';

@Component({
  selector: 'app-space-port',
  templateUrl: './space-port.component.html',
  styleUrls: ['./space-port.component.scss'],
})
export class SpacePortComponent implements OnInit {
  dataSpacePort: any = [];
  constructor(private technologyService: TechnologyService) {}

  ngOnInit(): void {
    this.technologyService.getJson().subscribe((data) => {
      this.dataSpacePort = data.technology[2];
    });
  }
}
