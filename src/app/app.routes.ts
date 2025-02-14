import { Routes } from '@angular/router';
import { PanelComponent } from './main/panel/panel.component';
import { HomeComponent } from './main/panel/home/home.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { PresentationAcceptanceComponent } from './main/panel/presentation-acceptance/presentation-acceptance.component';
import { ReleaseLetterComponent } from './main/panel/release-letter/release-letter.component';
import { SocialServiceActivitiesComponent } from './main/panel/social-service-activities/social-service-activities.component';
import { SocialServiceEvaluationComponent } from './main/panel/social-service-evaluation/social-service-evaluation.component';
import { SocialServiceProjectComponent } from './main/panel/social-service-project/social-service-project.component';
import { SuspensionCancellationComponent } from './main/panel/suspension-cancellation/suspension-cancellation.component';
import { PdfReportComponent } from './main/panel/pdf-report/pdf-report.component';

export const routes: Routes = [
    { path: "", redirectTo: "welcome", pathMatch: "full" },
     
    
    //Vista de bienvenida
  { path: "welcome", component: WelcomeComponent }, 


    //Panel principal
  {
    path: "panel",
    component: PanelComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" }, 
      { path: "home", component: HomeComponent },
      { path: "presentation", component: PresentationAcceptanceComponent },
      { path: "letter", component: ReleaseLetterComponent },
      { path: "activities", component: SocialServiceActivitiesComponent },
      { path: "evaluation", component: SocialServiceEvaluationComponent },
      { path: "proyect", component: SocialServiceProjectComponent },
      { path: "cancellation", component: SuspensionCancellationComponent  },
      { path: "pdfReport", component: PdfReportComponent },
      { path: "**", redirectTo: "home" }, 
    ],

    
    
  },



    {path: "**", component: WelcomeComponent},

];
