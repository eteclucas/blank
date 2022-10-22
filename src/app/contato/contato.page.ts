import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  
  nameRecebido:string = null;

  constructor(
    private route: ActivatedRoute, 
    private rota: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['name'])
      this.nameRecebido = params['name'];
    })
  }

  pageSobre(){
    console.log("passou aqui");
    this.rota.navigate(['/sobre', {name:'Lucas', idade:25}]);
  }

}
