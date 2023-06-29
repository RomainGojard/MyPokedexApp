import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Pokemon = {
  name: string;
  type: string;
  hp: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  template: `
        <div (click)="selectPokemon" >{{pokemon.name}}</div>
    `
})

export class CardComponent {

  @Input({required: true}) pokemon!: Pokemon;

  @Output() readonly PokemonSeleced = new EventEmitter<Pokemon>();

  numberOfPokemon = 1015;
  pokemons : Array<any> = [];
  somePokemon = {'name' : 'Bulbizarre', 'type' : 'Plante', 'hp' : 45};

  displayPokemon() {
    this.pokemons = [
      {'name' : 'Bulbizarre', 'type' : 'Plante', 'hp' : 45},
      {'name' : 'Herbizarre', 'type' : 'Plante', 'hp' : 60},
      {'name' : 'Florizarre', 'type' : 'Plante', 'hp' : 80},
    ]
  }

  public inputPokemon : string = '';

  search : Array<any> = this.pokemons;

    searchPokemon (pokemonName : string) {
      this.search = this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()));
    }

}
