import { Component, OnInit } from '@angular/core';
import { CrewService } from '../crew.service';

@Component({
  selector: 'app-mission-specialist',
  templateUrl: './mission-specialist.component.html',
  styleUrls: ['./mission-specialist.component.scss'],
})
export class MissionSpecialistComponent implements OnInit {
  dataMissionSpecialist: any = [];
  constructor(private crewService: CrewService) {}

  ngOnInit(): void {
    this.crewService.getJson().subscribe((data) => {
      this.dataMissionSpecialist = data.crew[1];
    });
  }
}
