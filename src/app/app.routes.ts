import { Routes } from '@angular/router';

import { LandingComponent } from '../app/landingpage/landingpage.component';
import { LandingpageBlueComponent } from './landingpage-blue/landingpage-blue.component';
import { LandingpageGreenComponent } from './landingpage-green/landingpage-green.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, outlet: 'red'},
  { path: '', component: LandingpageBlueComponent, outlet: 'blue'  },
  { path: '', component: LandingpageGreenComponent, outlet: 'green' },
  {
    path: 'landing-page',
    component: LandingComponent, outlet: 'red',
    title: 'Landing page'
  },
  { path: 'landing-page', component: LandingpageBlueComponent, outlet: 'blue', title: 'Landing page' },
  { path: 'landing-page', component: LandingpageGreenComponent, outlet: 'green', title: 'Landing page' }
];
