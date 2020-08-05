import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APPROUTING } from './app.routers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { BodyComponent } from './components/body/body.component';
import { LugarComponent } from './components/lugar/lugar.component';
import { LoguinComponent } from './components/loguin/loguin.component';
import { ListarlugaresComponent } from './components/listarlugares/listarlugares.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuarioComponent,
    BodyComponent,
    LugarComponent,
    LoguinComponent,
    ListarlugaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    APPROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
