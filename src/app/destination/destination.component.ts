import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DestinationService } from './destination.service';
// import { routeTransitionAnimations } from './route-transition-animations';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
  // animations: [routeTransitionAnimations],
})
export class DestinationComponent implements OnInit {
  images: any = [];
  setImage: string;

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getJson().subscribe((data) => {
      for (let i = 0; i < 4; i++) {
        const image = data.destinations;
        this.images[i] = image[i].images.png;
      }
    });
  }

  change(i: number) {
    this.setImage = this.images[i];
  }

  // prepareRoute(outlet: RouterOutlet) {
  //   return (
  //     outlet &&
  //     outlet.activatedRouteData &&
  //     outlet.activatedRouteData['animationState']
  //   );
  // }
}
