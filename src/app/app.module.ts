import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { JuliaComponent } from './julia/julia.component';
import { JuliaListaComponent } from './julia-lista/julia-lista.component';
import { JuliaDisciplinasService } from './julia-disciplinas.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: JuliaComponent },
      { path: 'lista', component: JuliaListaComponent },
    ]),
  ],
  declarations: [AppComponent, JuliaComponent, JuliaListaComponent],
  bootstrap: [AppComponent],
  providers: [JuliaDisciplinasService],
})
export class AppModule {}
