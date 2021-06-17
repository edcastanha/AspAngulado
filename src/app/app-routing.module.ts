import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './Contatos/Contatos.component';
import { HomeComponent } from './Home/Home.component';
import { ProdutosComponent } from './Produtos/Produtos.component';
import { ProjetosComponent } from './Projetos/Projetos.component';
import { SobreComponent } from './Sobre/Sobre.component';

const routes: Routes = [
  {path: '',  redirectTo: 'home', pathMatch: 'full' },
  {path: 'home',      component: HomeComponent      },
  {path: 'sobre',     component: SobreComponent     },
  {path: 'produtos',  component: ProdutosComponent  },
  {path: 'projetos',  component: ProjetosComponent  },
  {path: 'contato',   component: ContatosComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
