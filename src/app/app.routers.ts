import {RouterModule, Routes} from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import {BodyComponent} from './components/body/body.component';
import { LugarComponent } from './components/lugar/lugar.component';
import { from } from 'rxjs';
import { LoguinComponent } from './components/loguin/loguin.component';


const ROUTES: Routes = [
{path: 'home', component: BodyComponent},
{ path: 'registro', component: UsuarioComponent },
{path: 'lugar', component: LugarComponent },
{path: 'loguin', component: LoguinComponent}
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
