import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoibHV4b2kxMiIsImEiOiJjbTJidXFwamQwdmJxMmpveHkwczRlb29uIn0.wgGzpaHJkDHol4g8grSDRQ';

import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { RouterModule } from '@angular/router';
import { MapsRoutingModule } from './maps-routing.module';
import { CounterComponent } from "../alone/components/counter/counter.component";
import { AlonePageComponent } from '../alone/pages/alone-page/alone-page.component';
import { SideMenuComponent } from "../alone/components/side-menu/side-menu.component";



@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MapsRoutingModule,
    CounterComponent,
    AlonePageComponent,
    SideMenuComponent,
]
})
export class MapsModule { }
