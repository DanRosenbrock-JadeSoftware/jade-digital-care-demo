import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ProjectModel} from '../_models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  ProjectObjl: ProjectModel[] = [
    {
      Id: 0,
      ProjectName: 'TAL Insurance',
      ClientName: 'TAL',
      ProjectHealth: 100,
      TeamId: 2,
      StartToDeploy: '2h 30m',
      ChangeFailRate: '3%',
      LeadTimeToChange: '2h 22m',
      MeanTimeToRestore: '5h 32m'
    },
    {
      Id: 1,
      ProjectName: 'ClearView',
      ClientName: 'ClearView',
      ProjectHealth: 75,
      TeamId: 1,
      StartToDeploy: '3h 30m',
      ChangeFailRate: '2%',
      LeadTimeToChange: '1h 18m',
      MeanTimeToRestore: '5h 00m'
    },
    {
      Id: 2,
      ProjectName: 'SBS Portal',
      ClientName: 'SBS Bank',
      ProjectHealth: 80,
      TeamId: 2,
      StartToDeploy: '01h 30m',
      ChangeFailRate: '4%',
      LeadTimeToChange: '1h 4m',
      MeanTimeToRestore: '3h 14m'
    },
    {
      Id: 3,
      ProjectName: 'Meridian Portal',
      ClientName: 'Meridian',
      ProjectHealth: 75,
      TeamId: 2,
      StartToDeploy: '2h 30m',
      ChangeFailRate: '1%',
      LeadTimeToChange: '2h 2m',
      MeanTimeToRestore: '1h 32m'
    },
    {
      Id: 4,
      ProjectName: 'Third Eye',
      ClientName: 'Jade',
      ProjectHealth: 100,
      TeamId: 1,
      StartToDeploy: '0h 55m',
      ChangeFailRate: '0.1%',
      LeadTimeToChange: '2h 13m',
      MeanTimeToRestore: '0h 55m'
    }
  ];

  constructor() {
  }

  getProjects(): Observable<ProjectModel[]> {
    return of<ProjectModel[]>(this.ProjectObjl);
  }

  getProjectById(id: number): Observable<ProjectModel> {
    return of<ProjectModel>(this.ProjectObjl.find(project => project.Id === id));
  }
}
