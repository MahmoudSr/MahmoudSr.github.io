import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.scss'],
})
export class EuropaComponent implements OnInit {
  dataEuropa: any = [];
  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getJson().subscribe((data) => {
      this.dataEuropa = data.destinations[2];
    });
  }
}
