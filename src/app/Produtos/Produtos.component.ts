import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Produtos',
  templateUrl: './Produtos.component.html',
  styleUrls: ['./Produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public titulo = 'PRODUTOS'

  public produtos =[
    {Id: 1, Produto: 'Morão'    , Categoria: 'Eucalipto', Valor: 15.50, Unidade: 'Und'  },
    {Id: 21, Produto: 'Viga'     , Categoria: 'Eucalipto', Valor: 19.79, Unidade: 'Mt'  },
    {Id: 11, Produto: 'Estaca'   , Categoria: 'Eucalipto', Valor: 15.70, Unidade: 'Uni'  },
    {Id: 31, Produto: 'Pontalete', Categoria: 'Eucalipto', Valor: 15.70, Unidade: 'Mt'  }
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
