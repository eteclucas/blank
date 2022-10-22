import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router'


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {

  id:string = null; 
  idade:string = null; 
  constructor(private route: ActivatedRoute, private rota:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log(params)
        this.id = params['id'];
        
      }

    )

  }

}
