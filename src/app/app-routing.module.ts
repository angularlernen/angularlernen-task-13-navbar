import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventCollectionComponent } from './events/event-collection/event-collection.component';
import { ProfileCollectionComponent } from './profiles/profile-collection/profile-collection.component';

const routes: Routes = [
  {
    path: 'events',
    component: EventCollectionComponent
  },
  {
    path: 'profiles',
    component: ProfileCollectionComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/events'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
