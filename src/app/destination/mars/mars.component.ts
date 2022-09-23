import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss'],
})
export class MarsComponent implements OnInit {
  dataMars: any = [];
  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getJson().subscribe((data) => {
      this.dataMars = data.destinations[1];
    });
  }
}
