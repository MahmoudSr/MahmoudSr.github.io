import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-titan',
  templateUrl: './titan.component.html',
  styleUrls: ['./titan.component.scss'],
})
export class TitanComponent implements OnInit {
  dataTitan: any = [];
  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getJson().subscribe((data) => {
      this.dataTitan = data.destinations[3];
    });
  }
}
