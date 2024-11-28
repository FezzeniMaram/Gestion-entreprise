import { Routes } from '@angular/router';
import { ConnectePageComponent } from './connecte-page/connecte-page.component';
import { InscrirePageComponent } from './inscrire-page/inscrire-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployerPageComponent } from './employer-page/employer-page.component';
import { AjoutEmployerComponent } from './ajout-employer/ajout-employer.component';
import { ViemEmployerComponent } from './view-employer/view-employer.component';
import { AjoutStagiaireComponent } from './ajout-stagiaire/ajout-stagiaire.component';
import { StagiairePageComponent } from './stagiaire-page/stagiaire-page.component';
import { ViewStagiaireComponent } from './view-stagiaire/view-stagiaire.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { ModifierEmployerComponent } from './modifier-employer/modifier-employer.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { ModifierStagiaireComponent } from './modifier-stagiaire/modifier-stagiaire.component';


export const routes: Routes = [
{ path:'connecte', component:ConnectePageComponent},
{ path:'inscrire', component:InscrirePageComponent},
{ path:'home', component:HomePageComponent},
{path: 'employer',component:EmployerPageComponent},
{path: 'ajout_employer',component:AjoutEmployerComponent},
{path: 'viewEmployer',component: ViemEmployerComponent},
{path: 'stagiaire',component:StagiairePageComponent},
{path: 'ajout_stag',component: AjoutStagiaireComponent},
{path: 'view_stag',component: ViewStagiaireComponent},
{path: 'client', component: ClientPageComponent},
{path: 'ajout_client',component: AjoutClientComponent},
{path: 'view_client',component: ViewClientComponent},
{path: 'modifier_employer', component: ModifierEmployerComponent},
{path: 'modifier_stagiaire', component: ModifierStagiaireComponent},
{path: 'modifier_client', component: ModifierClientComponent},

{path: '', redirectTo: '/connecte', pathMatch: 'full'},

];
