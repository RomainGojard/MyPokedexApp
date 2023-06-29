import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './models/Pokemon';

@Pipe({name: 'numberOfAttacksPipe'})

export class numberOfAttacksPipe  implements PipeTransform{
    transform(pokemon : Pokemon|null) {
        if(pokemon == null){
            return 0;
        }else{
        return pokemon.moves.length;
        }
    }
}