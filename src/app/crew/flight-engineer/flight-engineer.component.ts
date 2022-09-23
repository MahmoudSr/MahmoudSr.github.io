import { Component, OnInit } from '@angular/core';
import { CrewService } from '../crew.service';

@Component({
  selector: 'app-flight-engineer',
  templateUrl: './flight-engineer.component.html',
  styleUrls: ['./flight-engineer.component.scss'],
})
export class FlightEngineerComponent implements OnInit {
  dataFightEngineer: any = [];
  constructor(private crewService: CrewService) {}

  ngOnInit(): void {
    this.crewService.getJson().subscribe((data) => {
      this.dataFightEngineer = data.crew[3];
    });
  }
}
