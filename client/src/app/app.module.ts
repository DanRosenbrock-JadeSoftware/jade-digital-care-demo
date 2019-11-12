import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {DeploymentStatisticsComponent} from './_shared-components/deployment-statistics/deployment-statistics.component';
import {HeaderComponent} from './_shared-components/header/header.component';
import {ProjectHealthComponent} from './_shared-components/project-health/project-health.component';
import {TeamMemberComponent} from './_shared-components/team-member/team-member.component';
import {TeamWorkBreakdownComponent} from './_shared-components/team-work-breakdown/team-work-breakdown.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EnvironmentsViewComponent} from './components/environments-view/environments-view.component';
import {ProjectViewComponent} from './components/project-view/project-view.component';
import {ProjectsViewComponent} from './components/projects-view/projects-view.component';
import {TeamViewComponent} from './components/team-view/team-view.component';
import { CreateNewEnvironmentComponent } from './_shared-components/create-new-environment/create-new-environment.component';
import { RequestNewEnvironmentComponent } from './_shared-components/request-new-environment/request-new-environment.component';
import { CopyEnvironmentComponent } from './_shared-components/copy-environment/copy-environment.component';
import { EnvironmentHeaderComponent } from './_shared-components/environment-header/environment-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamViewComponent,
    DeploymentStatisticsComponent,
    TeamMemberComponent,
    ProjectHealthComponent,
    EnvironmentsViewComponent,
    ProjectsViewComponent,
    ProjectViewComponent,
    TeamWorkBreakdownComponent,
    CreateNewEnvironmentComponent,
    RequestNewEnvironmentComponent,
    CopyEnvironmentComponent,
    EnvironmentHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule, AngularSvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
