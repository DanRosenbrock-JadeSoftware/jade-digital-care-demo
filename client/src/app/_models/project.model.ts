export interface ProjectModel {
  Id: number;
  ProjectName: string;
  ClientName: string;
  ProjectHealth: number;
  TeamId: number;
  StartToDeploy: string;
  ChangeFailRate: string;
  LeadTimeToChange: string;
  MeanTimeToRestore: string;
}
