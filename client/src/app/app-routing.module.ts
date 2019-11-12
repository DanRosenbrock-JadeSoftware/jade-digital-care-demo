import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectViewComponent} from './components/project-view/project-view.component';
import {EnvironmentsViewComponent} from './components/environments-view/environments-view.component';
import {TeamViewComponent} from './components/team-view/team-view.component';
import {ProjectsViewComponent} from './components/projects-view/projects-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/team-view', pathMatch: 'full'},
  {path: 'team-view', component: TeamViewComponent},
  {path: 'projects-view', component: ProjectsViewComponent},
  {path: 'project/:id', component: ProjectViewComponent},
  {path: 'environment', component: EnvironmentsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
