import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../technology.service';

@Component({
  selector: 'app-launch-vehicle',
  templateUrl: './launch-vehicle.component.html',
  styleUrls: ['./launch-vehicle.component.scss'],
})
export class LaunchVehicleComponent implements OnInit {
  dataLaunchVehicle: any = [];
  constructor(private technologyService: TechnologyService) {}

  ngOnInit(): void {
    this.technologyService.getJson().subscribe((data) => {
      // console.log(data.technology);
      this.dataLaunchVehicle = data.technology[0];
      console.log(this.dataLaunchVehicle);
    });
  }
}
