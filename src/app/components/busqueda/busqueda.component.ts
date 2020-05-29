import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',

})
export class BusquedaComponent implements OnInit {

  heroes: any[] = [];
  termino: string;



  constructor(  private activatedRoute: ActivatedRoute,
                private heroesService: HeroesService,
                private router: Router  ) {


  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>{

      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);

    });
  }

  verHeroe( idx: number){

    this.router.navigate( ['/heroe', idx] );

  }



  
}
