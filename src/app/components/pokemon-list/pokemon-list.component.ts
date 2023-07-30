import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Pokemon } from 'src/app/models/Pokemon';
import { Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Coeur plein
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'; // Coeur vide

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  NUMBER_OF_POKEMONS_PER_PAGE = 20;
  pokemons: Pokemon[] = [];
  page: number = 1;
  totalPokemons: number = 0;
  favPokemons: Pokemon[] = [];

  faHeart = faHeart;
  farHeart = farHeart;

  constructor(
    private dataService: DataService,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.dataService.getPokemons(this.NUMBER_OF_POKEMONS_PER_PAGE, (this.page - 1) * this.NUMBER_OF_POKEMONS_PER_PAGE).subscribe((response: any) => {
      this.totalPokemons = response.count;
      let temp = [];
      response.results.forEach((result: any) => {
        this.dataService.getPokemon(result.name).subscribe((uniqueResponse: any) => {
          this.pokemons.push(uniqueResponse);
        });
      });
    })
    //TODO: sort ne marche pas :(

    console.log('before sort', this.pokemons);
    this.pokemons = this.pokemons.sort(function (a, b) { return b.id - a.id });
    console.log('after sort', this.pokemons);

  }

  toggleFavorite(pokemon: Pokemon): void {
    if (this.favPokemons.includes(pokemon)) {
      this.favPokemons.splice(this.favPokemons.indexOf(pokemon), 1);
    } else {
      this.favPokemons.push(pokemon);
    }
    console.log(this.favPokemons);
  }

  goToDetail(id: number) {
    this.router.navigate(['/pokemon', id])
  }

}
