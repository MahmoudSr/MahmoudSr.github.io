import { Component, OnInit } from '@angular/core';
import { CrewService } from '../crew.service';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.scss'],
})
export class PilotComponent implements OnInit {
  dataPilot: any = [];
  constructor(private crewService: CrewService) {}

  ngOnInit(): void {
    this.crewService.getJson().subscribe((data) => {
      this.dataPilot = data.crew[2];
      console.log(data.crew);
    });
  }
}
