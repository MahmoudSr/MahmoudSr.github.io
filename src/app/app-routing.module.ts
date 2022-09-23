import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommanderComponent } from './crew/commander/commander.component';
import { CrewComponent } from './crew/crew.component';
import { FlightEngineerComponent } from './crew/flight-engineer/flight-engineer.component';
import { MissionSpecialistComponent } from './crew/mission-specialist/mission-specialist.component';
import { PilotComponent } from './crew/pilot/pilot.component';
import { DestinationComponent } from './destination/destination.component';
import { EuropaComponent } from './destination/europa/europa.component';
import { MarsComponent } from './destination/mars/mars.component';
import { MoonComponent } from './destination/moon/moon.component';
import { TitanComponent } from './destination/titan/titan.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaunchVehicleComponent } from './technology/launch-vehicle/launch-vehicle.component';
import { SpaceCapsuleComponent } from './technology/space-capsule/space-capsule.component';
import { SpacePortComponent } from './technology/space-port/space-port.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'destination',
    component: DestinationComponent,
    children: [
      {
        path: '',
        redirectTo: 'moon',
        pathMatch: 'full',
      },

      {
        path: 'moon',
        component: MoonComponent,
        data: { animationState: 'One' },
      },
      {
        path: 'mars',
        component: MarsComponent,
        data: { animationState: 'Two' },
      },
      {
        path: 'europa',
        component: EuropaComponent,
        data: { animationState: 'Three' },
      },
      {
        path: 'titan',
        component: TitanComponent,
        data: { animationState: 'Four' },
      },
    ],
  },
  {
    path: 'crew',
    component: CrewComponent,
    children: [
      {
        path: '',
        redirectTo: 'commander',
        pathMatch: 'full',
      },
      {
        path: 'commander',
        component: CommanderComponent,
      },
      {
        path: 'flight-engineer',
        component: FlightEngineerComponent,
      },
      {
        path: 'mission-specialist',
        component: MissionSpecialistComponent,
      },
      {
        path: 'pilot',
        component: PilotComponent,
      },
    ],
  },
  {
    path: 'technology',
    component: TechnologyComponent,
    children: [
      {
        path: '',
        redirectTo: 'launchvehicle',
        pathMatch: 'full',
      },
      {
        path: 'launchvehicle',
        component: LaunchVehicleComponent,
      },
      {
        path: 'spaceport',
        component: SpacePortComponent,
      },
      {
        path: 'spacecapsule',
        component: SpaceCapsuleComponent,
      },
    ],
  },
  {
    path: 'explore',
    redirectTo: 'destination/moon',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
