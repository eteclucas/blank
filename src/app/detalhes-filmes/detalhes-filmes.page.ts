import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { FilmesService } from '../sevices/filmes.service';

@Component({
  selector: 'app-detalhes-filmes',
  templateUrl: './detalhes-filmes.page.html',
  styleUrls: ['./detalhes-filmes.page.scss'],
})
export class DetalhesFilmesPage implements OnInit {
  
  id:number = 0
  informacoes: any = [];

  constructor( private route: ActivatedRoute, private filmesServices:FilmesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id'])
      this.id = params['id'];
    })

    this.carregarDetalhes();    
  }

  async carregarDetalhes(){
    this.informacoes = await this.filmesServices.getDetail(this.id);    

    console.log("Informacoes ", this.informacoes)
  }

}
