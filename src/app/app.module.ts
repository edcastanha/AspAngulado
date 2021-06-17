import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './Sobre/Sobre.component';
import { ProdutosComponent } from './Produtos/Produtos.component';
import { ProjetosComponent } from './Projetos/Projetos.component';
import { ContatosComponent } from './Contatos/Contatos.component';
import { HomeComponent } from './Home/Home.component';
import { MenuComponent } from './Menu/Menu.component';
import { TituloComponent } from './Titulo/Titulo.component';

@NgModule({
  declarations: [				
     AppComponent,
      SobreComponent,
      ProdutosComponent,
      ProjetosComponent,
      ContatosComponent,
      HomeComponent,
      MenuComponent,
      TituloComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
