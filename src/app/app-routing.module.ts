import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { DiversComponent } from './pages/divers/divers.component';
import { ExpertisesComponent } from './pages/expertises/expertises.component';

const routes: Routes = [
	{ path: '', component: HomeComponent, },
	{ path: 'login', component: LoginComponent, },
	{ path: 'services', component: ServicesComponent, },
	{ path: 'about', component: AboutComponent, },
	{ path: 'divers', component: DiversComponent, },
	{ path: 'expertises', component: ExpertisesComponent, },
	{ path: '**', component: NotFoundComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
