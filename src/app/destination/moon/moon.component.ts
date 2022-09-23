import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.scss'],
})
export class MoonComponent implements OnInit {
  dataMoon: any = [];

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getJson().subscribe((data) => {
      this.dataMoon = data.destinations[0];
    });
  }
}
