import { Component, OnInit } from '@angular/core';
import { CrewService } from '../crew.service';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.scss'],
})
export class CommanderComponent implements OnInit {
  dataCommander: any = [];
  constructor(private crewService: CrewService) {}

  ngOnInit(): void {
    this.crewService.getJson().subscribe((data) => {
      this.dataCommander = data.crew[0];
      console.log(this.dataCommander);
    });
  }
}
