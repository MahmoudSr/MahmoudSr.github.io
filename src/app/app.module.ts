import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoonComponent } from './destination/moon/moon.component';
import { MarsComponent } from './destination/mars/mars.component';
import { EuropaComponent } from './destination/europa/europa.component';
import { TitanComponent } from './destination/titan/titan.component';
import { DestinationService } from './destination/destination.service';
import { CrewService } from './crew/crew.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommanderComponent } from './crew/commander/commander.component';
import { MissionSpecialistComponent } from './crew/mission-specialist/mission-specialist.component';
import { PilotComponent } from './crew/pilot/pilot.component';
import { FlightEngineerComponent } from './crew/flight-engineer/flight-engineer.component';
import { LaunchVehicleComponent } from './technology/launch-vehicle/launch-vehicle.component';
import { SpacePortComponent } from './technology/space-port/space-port.component';
import { SpaceCapsuleComponent } from './technology/space-capsule/space-capsule.component';
import { TechnologyService } from './technology/technology.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    HeaderComponent,
    MoonComponent,
    MarsComponent,
    EuropaComponent,
    TitanComponent,
    PageNotFoundComponent,
    CommanderComponent,
    MissionSpecialistComponent,
    PilotComponent,
    FlightEngineerComponent,
    LaunchVehicleComponent,
    SpacePortComponent,
    SpaceCapsuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [DestinationService, CrewService, TechnologyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
