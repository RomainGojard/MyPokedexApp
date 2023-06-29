import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonTest: null | Pokemon = null;
  pokemons: Pokemon[] = [];

  constructor(
    private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getPokemons().subscribe((response: any) => {
      response.results.forEach((result: any) => {
        this.dataService.getPokemon(result.name).subscribe((uniqueResponse: any) => {
          this.pokemons.push(uniqueResponse);
        });
      });
    })
    this.pokemons.sort((a, b) => a.order - b.order);
  }
}