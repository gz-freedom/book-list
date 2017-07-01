import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home.component";
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'read', component: ReadComponent}
];

export const routing = RouterModule.forRoot(routes);
